import { User } from "../../Entryfile/imagepath";

$(document).ready(function() {
    $('#valid_login').hide();
    $('#valid_forget').hide();
    $('#valid_std_signup').hide();
    $('#valid_tutor_signup').hide();

    $('#btn_signin').click(function() {
        var username = $('#username').val();
        var userpassword = $('#userpassword').val();
        if(username == '' || userpassword == '') {
            // alert('Enter valid username and password....');
            $('#username').addClass('is-invalid');
            $('#userpassword').addClass('is-invalid');
            $('#username').attr('style', 'border-color:#dc3545');
            $('#userpassword').attr('style', 'border-color:#dc3545');
            $('#valid_login').show();
            // return;
        }
    });
    $('#username').change(function() {
        $('#username').removeClass('is-invalid');
        $('#username').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#userpassword').change(function() {
        $('#userpassword').removeClass('is-invalid');
        $('#userpassword').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#btn_forget').click(function() {
        var useremail = $('#forget_useremail').val();
        if(useremail == '') {
            $('#forget_useremail').addClass('is-invalid');
            $('#forget_useremail').attr('style', 'border-color:#dc3545');
            $('#valid_forget').show();
        }
    });

    $('#forget_useremail').change(function() {
        $('#forget_useremail').removeClass('is-invalid');
        $('#forget_useremail').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#btn_std_signup').click(function() {
        var firstname = $('#std_firstname').val();
        var lastname = $('#std_lastname').val();
        var email = $('#std_email').val();
        var password = $('#std_password').val();
        if(firstname == '' || lastname == '' || email == '' || password == '') {
            $('#std_firstname').addClass('is-invalid');
            $('#std_lastname').addClass('is-invalid');
            $('#std_email').addClass('is-invalid');
            $('#std_password').addClass('is-invalid');
            $('#std_firstname').attr('style', 'border-color:#dc3545');
            $('#std_lastname').attr('style', 'border-color:#dc3545');
            $('#std_email').attr('style', 'border-color:#dc3545');
            $('#std_password').attr('style', 'border-color:#dc3545');
            $('#valid_std_signup').show();
        }
    });

    $('#std_firstname').change(function() {
        $('#std_firstname').removeClass('is-invalid');
        $('#std_firstname').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#std_lastname').change(function() {
        $('#std_lastname').removeClass('is-invalid');
        $('#std_lastname').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#std_email').change(function() {
        $('#std_email').removeClass('is-invalid');
        $('#std_email').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#std_password').change(function() {
        $('#std_password').removeClass('is-invalid');
        $('#std_password').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#btn_tutor_signup').click(function() {
        var firstname = $('#tutor_firstname').val();
        var lastname = $('#tutor_lastname').val();
        var email = $('#tutor_email').val();
        var password = $('#tutor_password').val();
        if(firstname == '' || lastname == '' || email == '' || password == '') {
            $('#tutor_firstname').addClass('is-invalid');
            $('#tutor_lastname').addClass('is-invalid');
            $('#tutor_email').addClass('is-invalid');
            $('#tutor_password').addClass('is-invalid');
            $('#tutor_firstname').attr('style', 'border-color:#dc3545');
            $('#tutor_lastname').attr('style', 'border-color:#dc3545');
            $('#tutor_email').attr('style', 'border-color:#dc3545');
            $('#tutor_password').attr('style', 'border-color:#dc3545');
            $('#valid_tutor_signup').show();
        }
    });

    $('#tutor_firstname').change(function() {
        $('#tutor_firstname').removeClass('is-invalid');
        $('#tutor_firstname').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#tutor_lastname').change(function() {
        $('#tutor_lastname').removeClass('is-invalid');
        $('#tutor_lastname').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#tutor_email').change(function() {
        $('#tutor_email').removeClass('is-invalid');
        $('#tutor_email').attr('style', 'border-color:1px solid #e3e3e3');
    });

    $('#tutor_password').change(function() {
        $('#tutor_password').removeClass('is-invalid');
        $('#tutor_password').attr('style', 'border-color:1px solid #e3e3e3');
    });
});