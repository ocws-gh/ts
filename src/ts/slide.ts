// interface JQueryPlungin {
//     bxSlider(): JQuery;
// }

// jQuery(function () {
//   let sliderList :JQuery = jQuery(".sliderList");
//     let e = sliderList.bxSlider({
//         auto: true,
//         pause: 9000,
//         speed: 680,
//         controls: false,
//         mode: 'fade',
//         pagerCustom: ".sliderThumb",
//         onSlideAfter: function () {
//             e.startAuto();
//         }
//     });
// });


export class Slide {
    create() {
        $(function () {
            let sliderList :JQuery = $(".sliderList");
            let e = sliderList.bxSlider({
                auto: true,
                pause: 9000,
                speed: 680,
                controls: false,
                mode: 'fade',
                pagerCustom: ".sliderThumb",
                onSlideAfter: function () {
                    e.startAuto();
                }
            });
        });
    }
}