$(document).ready(function() {
    $('#taskForm').submit(function(event) {
        event.preventDefault();
        var task = $(this).toObject();
        console.log(task);
    });

    $.fn.toObject = function() {
        return this.serializeArray().reduce(function(obj, item) {
            obj[item.name] = item.value;
            return obj;
        }, {});
    };

    $.fn.fromObject = function(obj) {
        $.each(this.find(':input'), function(i, field) {
            if (obj[field.name]) {
                $(field).val(obj[field.name]);
            }
        });
    };

    $('#printObject').click(function() {
        var obj = $('#taskForm').toObject();
        console.log(JSON.stringify(obj));
    });

    $('#loadObject').click(function() {
        var demoObj = {
            taskName: 'Demo Task',
            taskDescription: 'This is a demo task description'
        };
        $('#taskForm').fromObject(demoObj);
    });
});
