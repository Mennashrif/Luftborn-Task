
//delete row
$(".close-tr").click(function () {
    $(this).closest("tr").remove();
});

//delete row
$(".close-tr").click(function () {
    $(this).closest("div.person-invite").remove();
});

//checked all
$(document).ready(function () {
    'use strict';

    //checked all add people
    $(".CheckAll").click(function () {
        $(this).parents(".item").find(".check").prop('checked', $(this).prop('checked'));
    });



    //checked all
    $(".CheckAll").click(function () {
        $(this).parents(".nav-item").find(".check").prop('checked', $(this).prop('checked'));
    });

    $(".check").click(function () {
        var IsSelected = $($(this).parents("ul.flex-column.nav")[0]).find(".check:checked");
        if (IsSelected.length > 0) {
            $($(this).parents("li.nav-item").find(".checkmark")[0]).addClass("CheckX");
        }
        else {
            $($(this).parents("li.nav-item").find(".checkmark")[0]).removeClass("CheckX");
        }
    });

    //plus-minuse - Counter
    $('#count').prop('disabled', true);
    $(document).on('click', '.plus', function () {
        $('#count').val(parseInt($('#count').val()) + 1);

        var count = $(this).parent("div.counter.counter-table").find(".count");
        count.val(parseInt($(count).val()) + 1);
    });
    $(document).on('click', '.minus', function () {
        var count = $(this).parent("div.counter.counter-table").find(".count");
        if (parseInt($(count).val()) > 1) {
            $('#count').val(parseInt($('#count').val()) - 1);
            count.val(parseInt($(count).val()) - 1);
        }
    });


    //student-dailytask owl-carousel
    $(".owl-carousel").owlCarousel({
        rtl: true,
        stopOnHover: true,
        autoPlay: 3000,
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        center: true,
        nav: true,
        dots: true,
        loop: true,
        responsive: {
            600: {
                items: 3
            }
        }
    });

});
//for verify mobile code
$(document).ready(function () {
    'use strict';

    // text captcha  reload image
    $('#captcha_reload').on('click', function (e) {
        e.preventDefault();
        var d = new Date();
        var src = $("img#captcha_image").attr("src");
        src = src.split(/[?#]/)[0];
        $("img#captcha_image").attr("src", src + '?' + d.getTime());
    });

    // Focus next input once reaching maxlength 
    $(".verify-input").bind("input", function () {
        var $this = $(this);
        setTimeout(function () {
            if ($this.val().length >= parseInt($this.attr("maxlength"), 10)) {
                $this.next("input").focus();
            }
        }, 0);
    });

    //dropdown-toggle close searchBox
    $('.xbardown').on('click', function () {
        $('.TopBarSearch').removeClass('barDown');
        $('.TopBarBtns').removeClass('barDown');
    });
    $('.dropdown-toggle').on('click', function () {
        $('.TopBarSearch').removeClass('barDown');
    });

    // button dots drop subMenu Top Bar Button
    $('.icoBtn').on('click', function () {
        $('.TopBarBtns').toggleClass('barDown');
        $('.TopBarSearch').removeClass('barDown');
    });

    // button search drop subMenu Top Bar searchBox
    $('.icoBtn2').on('click', function () {
        $('.TopBarSearch').toggleClass('barDown');
        $('.TopBarBtns').removeClass('barDown');
    });

    // validations
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
    //end validation

    // checkbox-choose-one
    $('.checkbox').click(function () {
        $('.checkbox').not(this).prop('checked', false);
    });

    // checkbox-choose-Multi
    $('.checkbox-multi').click(function () {
        $('.checkbox-multi')(this).prop('checked', false);
    });

    // active-topics-div
    $(".div-contain").click(function () {
        $(".div-contain").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });

    // button dots drop subMenu topics Button


    $('.icoBtn3').on('click', function () {
        var $dots = $(this).parent().find('.sub-text-link-group');
        $(this).parent().find('.sub-text-link-group').toggleClass('barDown3');
        $('.sub-text-link-group').not($dots).removeClass('barDown3');
        //$('.sub-text-link-group').not(this).removeClass('barDown3');


    });


    // menu dots drop sub Top Bar Button
    /*$('.live-chat').on('click', function () {
       $('#LiveChatPop').toggleClass('livechatwin');
       if ($("#LiveChatPop").css('display') === 'none') {
           $("#LiveChatPop").css("display", "block");
       } 
       else {
           $("#LiveChatPop").css("display", "none");
       }
   });*/


}); // End (document ).ready(function()

//wizard-steps
$(document).ready(function () {
    'use strict';
    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('active').addClass('btn-circle');
            $item.addClass('active');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='checkbox'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) {
            nextStepWizard.removeAttr('disabled').trigger('click');
        }
    });

    $('div.setup-panel div a.active').trigger('click');
});
// tabs
$("#tile-1 .nav-tabs a").click(function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $("#tile-1 .slider").css({ "left": + position.left, "width": width });
});
var actWidth = $("#tile-1 .nav-tabs").find(".active").parent("li").width();
var actPosition = $("#tile-1 .nav-tabs .active").position();
$("#tile-1 .slider").css({ "left": + actPosition.left, "width": actWidth });

//upload file
function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var htmlPreview =

                '<p>' + input.files[0].name + '</p>';
            var wrapperZone = $(input).parent();
            var previewZone = $(input).parent().parent().find('.preview-zone');
            var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');

            wrapperZone.removeClass('dragover');
            previewZone.removeClass('hidden');
            boxZone.empty();
            boxZone.append(htmlPreview);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function reset(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
}

$(".dropzone").change(function () {
    readFile(this);
});

$('.dropzone-wrapper').on('dragover', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
});

$('.dropzone-wrapper').on('dragleave', function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
});

$('.remove-preview').on('click', function () {
    var boxZone = $(this).parents('.preview-zone').find('.box-body');
    var previewZone = $(this).parents('.preview-zone');
    var dropzone = $(this).parents('.form-group').find('.dropzone');
    boxZone.empty();
    previewZone.addClass('hidden');
    reset(dropzone);
});

//copyURL
function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("MyCopy");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
}
function showDiv() {
    document.getElementById('CongratePage').style.display = "block";
    document.getElementById('MainContent').style.display = "none";
}

document.getElementById('select-all').onclick = function () {
    var checkboxes = document.getElementsByName('MarkAll');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
}
document.getElementById('select-all2').onclick = function () {
    var checkboxes = document.getElementsByName('MarkAll');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
}




