
<html>
    <head>
        <title>Contact List</title>
        <link rel="stylesheet" href="Webdev2.css">
        <script type="text/javascript" src="Webdev2.js"></script>
        <script src="jquery.js"></script>
    </head>
    <body>
        <h1>Contact List</h1>
        <button class="open_prompt" onclick="open_popup_element('add_contact_popup')">+</button>
        <table id="table">
            <tbody>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Email Address</th>
                    <th>Contact</th>
                    <th>Action</th>
                </tr>
                <?php include 'getContact.php'; ?>
            </tbody>
        </table>
    </body>
</html>