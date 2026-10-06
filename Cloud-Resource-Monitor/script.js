document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const refreshBtn = document.getElementById('refreshBtn');
    
    let dashboardData = null;

    // Fetch local data
    async function fetchData() {
        try {
            document.getElementById('errorState').classList.add('hidden');
            document.getElementById('dashboardContent').classList.remove('hidden');
            
            // Note: In a real environment with local files, CORS or file:// protocol restrictions 
            // might prevent fetch(). We handle errors gracefully.
            const response = await fetch('./data/resources.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            dashboardData = await response.json();
            renderDashboard(dashboardData);
            
        } catch (error) {
            console.error('Could not fetch data:', error);
            showErrorState();
        }
    }

    // Render the entire dashboard
    function renderDashboard(data, searchTerm = '') {
        if (!data) return;

        const term = searchTerm.toLowerCase();

        // Filter data based on search term
        const filteredEC2 = data.ec2.filter(item => 
            item.name.toLowerCase().includes(term) || item.id.toLowerCase().includes(term)
        );
        const filteredS3 = data.s3.filter(item => 
            item.name.toLowerCase().includes(term)
        );
        const filteredLambda = data.lambda.filter(item => 
            item.name.toLowerCase().includes(term)
        );
        const filteredAlerts = data.alerts.filter(item => 
            item.message.toLowerCase().includes(term) || item.type.toLowerCase().includes(term)
        );

        // Update counts
        document.getElementById('ec2Count').textContent = filteredEC2.length;
        document.getElementById('s3Count').textContent = filteredS3.length;
        document.getElementById('lambdaCount').textContent = filteredLambda.length;
        document.getElementById('alertCount').textContent = filteredAlerts.length;

        // Render Tables
        renderEC2Table(filteredEC2);
        renderS3Table(filteredS3);
        renderLambdaTable(filteredLambda);
        renderAlertTable(filteredAlerts);
    }

    function renderEC2Table(instances) {
        const tbody = document.getElementById('ec2Body');
        tbody.innerHTML = '';
        
        if (instances.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center">No instances found</td></tr>';
            return;
        }

        instances.forEach(instance => {
            const statusClass = instance.status === 'running' ? 'badge-success' : 'badge-danger';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${instance.name}</strong></td>
                <td>${instance.id}</td>
                <td><span class="badge ${statusClass}">${instance.status}</span></td>
                <td>${instance.cpu}</td>
                <td>${instance.region}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    function renderS3Table(buckets) {
        const tbody = document.getElementById('s3Body');
        tbody.innerHTML = '';
        
        if (buckets.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center">No buckets found</td></tr>';
            return;
        }

        buckets.forEach(bucket => {
            const statusClass = bucket.status === 'Active' ? 'badge-success' : 'badge-warning';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${bucket.name}</strong></td>
                <td>${bucket.region}</td>
                <td>${bucket.storage}</td>
                <td><span class="badge ${statusClass}">${bucket.status}</span></td>
            `;
            tbody.appendChild(tr);
        });
    }

    function renderLambdaTable(functions) {
        const tbody = document.getElementById('lambdaBody');
        tbody.innerHTML = '';
        
        if (functions.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center">No functions found</td></tr>';
            return;
        }

        functions.forEach(func => {
            const statusClass = func.status === 'Active' ? 'badge-success' : 'badge-danger';
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${func.name}</strong></td>
                <td>${func.runtime}</td>
                <td>${func.invocations}</td>
                <td><span class="badge ${statusClass}">${func.status}</span></td>
            `;
            tbody.appendChild(tr);
        });
    }

    function renderAlertTable(alerts) {
        const tbody = document.getElementById('alertBody');
        tbody.innerHTML = '';
        
        if (alerts.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center">No alerts found</td></tr>';
            return;
        }

        alerts.forEach(alert => {
            let severityClass = 'badge-default';
            if (alert.severity === 'Critical') severityClass = 'badge-danger';
            else if (alert.severity === 'Warning') severityClass = 'badge-warning';
            else if (alert.severity === 'Info') severityClass = 'badge-info';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${alert.type}</strong></td>
                <td>${alert.message}</td>
                <td><span class="badge ${severityClass}">${alert.severity}</span></td>
                <td>${alert.time}</td>
                <td>${alert.status}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    function showErrorState() {
        document.getElementById('errorState').classList.remove('hidden');
        document.getElementById('dashboardContent').classList.add('hidden');
        document.getElementById('ec2Count').textContent = '0';
        document.getElementById('s3Count').textContent = '0';
        document.getElementById('lambdaCount').textContent = '0';
        document.getElementById('alertCount').textContent = '0';
    }

    // Event Listeners
    refreshBtn.addEventListener('click', () => {
        // Add a spinning effect to the icon
        const icon = refreshBtn.querySelector('i');
        icon.classList.add('fa-spin');
        
        // Simulate network delay
        setTimeout(() => {
            fetchData();
            icon.classList.remove('fa-spin');
        }, 500);
    });

    searchInput.addEventListener('input', (e) => {
        renderDashboard(dashboardData, e.target.value);
    });

    // Initial load
    fetchData();
});
