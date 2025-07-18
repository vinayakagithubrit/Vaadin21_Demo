<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4; }
        .header { background-color: #333; color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center; }
        .header h1 { margin: 0; font-size: 24px; }
        .header a { color: white; text-decoration: none; padding: 8px 15px; border-radius: 4px; background-color: #555; }
        .header a:hover { background-color: #777; }
        .tabs { background-color: #eee; padding: 10px 20px; border-bottom: 1px solid #ccc; }
        .tabs a { text-decoration: none; color: #333; padding: 10px 15px; margin-right: 10px; border-radius: 5px; background-color: #ddd; }
        .tabs a.active, .tabs a:hover { background-color: #007bff; color: white; }
        .content { padding: 20px; text-align: center; }
        .footer { background-color: #333; color: white; text-align: center; padding: 10px; position: fixed; bottom: 0; width: 100%; }
    </style>
    <script>
        // Simple JS to set active tab
        document.addEventListener('DOMContentLoaded', function() {
            const currentPath = window.location.pathname;
            document.querySelectorAll('.tabs a').forEach(link => {
                if (currentPath.includes(link.getAttribute('data-tab-path'))) {
                    link.classList.add('active');
                }
            });
        });
    </script>
</head>
<body>
    <div class="header">
        <h1>Welcome to the Dashboard, ${sessionScope.loggedInUser}!</h1>
        <a href="${appBaseUrlContext}/logout">Logout</a>
    </div>

    <div class="tabs">
        <a href="${appBaseUrlContext}/VAADIN/ui" data-tab-path="/vaadin/ui">TCS</a>
        <a href="${appBaseUrlContext}/VAADIN/ecom" data-tab-path="/vaadin/ecom">ECOM</a>
    </div>

    <div class="content">
        <p>Please select a tab above to navigate to the respective management section.</p>
        </div>

    <div class="footer">
        © 2025 My Company
    </div>
</body>
</html>