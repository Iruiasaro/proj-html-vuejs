var app = new Vue(
    {
        el: '#app',
        data: {
            //navbar_header
            linkNav: ['Home', 'About', 'Services', 'Blog', 'Contact', 'Portfolio'],

            //footer
            footQuick: ['Services', 'Contact', 'Blog'],

            footResources: ['Art Design', 'Computer', 'IT News', 'Networking', 'Web Security'],

            footContactUs: {
                Address: ' Patricia C.Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051',
                Phone: ' +99 (0) 101 0000 888',
                Email: ' info@yourdomain.com'
            },
        }
    }
)