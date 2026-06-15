function navigateToProject(projectNumber) {
    $('#myModal').modal('show');

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