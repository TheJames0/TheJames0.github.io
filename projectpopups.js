function navigateToProject(projectNumber) {
    // Assuming you have a modal with the id 'myModal'
    $('#myModal').modal('show');

    // Set the content of the modal based on the project number
    var projectContent = 'project' + projectNumber + '.html';
    console.log(projectContent);
    $.ajax({
        url: projectContent,
        success: function (data) {
            $('#myModal .modal-body').html(data);
        },
        error: function () {
            console.log('Error loading project1.html');
        }
    });
}