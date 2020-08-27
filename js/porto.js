$(document).ready(function(){

    const portoWrapper = $("#porto-wrapper");
    
    class Portofolio {
        constructor(title, description, image, techs){
            this.title = title;
            this.description = description;
            this.image = image;
            this.techs = techs;
        }
        createElement(){
            let template = portoWrapper.find("#template-porto").first();
            template = template.clone();
            template.removeAttr("id");
            template.find(".title-project").text(this.title);
            template.find(".desc-project").text(this.description);
            template.find("img").attr("src", this.image);
            template.find("a").magnificPopup({
                type: 'inline',
                fixedContentPos: false,
                fixedBgPos: true,
                overflowY: 'auto',
                closeBtnInside: true,
                preloader: false,
                midClick: true,
                removalDelay: 300,
                mainClass: 'my-mfp-zoom-in'
            });
            return template;
        }
    }
    const portos = [
        new Portofolio("BSM Rent Dashboard (2018)", "Camera Rental Web Dashboard", "images/project2.png", ["ReactJS", "Node.js (Feathers)"]),
        new Portofolio("Kopiketjil Online Store (2018)", "Online Store For Kopiketjil Franchise", "images/project1.png", ["Vue.js", "Lumen"]),
        new Portofolio("Kopiketjil Point of Sale (2018)", "POS Webapp for Kopiketjil", "images/project3.png", ["jQuery AJAX", "Laravel"]),
        new Portofolio("Kopiketjil POS Admin (2018)", "POS Admin Webapp Dashboard", "images/project4.png", ["Vue.js", "Lumen"]),
        new Portofolio("Delimatara Official Website (2017)", "Website for PT. Delimatara", "images/project5.png", ["jQuery AJAX", "Laravel"]),
        new Portofolio("MauCatering Online Store (2017)", "Catering Online Website", "images/project6.png", ["jQuery AJAX", "Laravel"]),
        new Portofolio("Tap Ball Faster (2015)", "Android Game", "images/tapballfaster.jpeg", ["Unity"]),
        new Portofolio("Smart Quiz (2017)", "Android Game", "images/smartquiz.jpeg", ["Unity"]),
        new Portofolio("The Squirrel (2017)", "Android Game", "images/thesquirrel.jpeg", ["Unity"]),
        new Portofolio("TR Flying (2017)", "Android Game", "images/trflying.jpeg", ["Unity"]),
        new Portofolio("Jonnathan Jordian Website (2016)", "Personal Profile Website for Jonnathan Jordian", "images/jonathanjordian.png", ["Laravel"]),
        new Portofolio("Where is Rambo (2018)", "Desktop Game (My thesis project)", "images/whereisrambo.png", ["Unity", "Affectiva", "Facial Expression Recognition"]),
        new Portofolio("Lazajack (2016)", "Tokopedia Web Clone", "images/lazajack.png", ["Laravel", "SASS"]),
        new Portofolio("TR Bank (2016)", "Desktop App for Manage Banking Bussiness", "images/trbank.png", ["C#", "LINQ"]),
        new Portofolio("Clash of Pong (2014)", "Android Game", "images/clashofpong.webp", ["Unity"]),
        new Portofolio("Catch The Fruits (2014)", "Android Game", "images/catchfruit.webp", ["Unity"]),
        new Portofolio("Insta Receipt (2016)", "Android App", "images/instareceipt.png", ["Android Studio"]),
        new Portofolio("TBookstore (2017)", "Online Bookstore", "images/tbookstore.png", ["JSP"]),
        new Portofolio("TR Foundation (2016)", "Web Design Prototype", "images/trfoundation.png", ["HTML", "CSS"]),
        new Portofolio("TRamedia (2016)", "Web Design Prototype", "images/tramedia.png", ["HTML", "CSS"]),
    ];

    portos.forEach(porto => {
        portoWrapper.append(porto.createElement()); 
        //console.log(porto);       
    });
 
     $(document).on("click", ".popup-modal-dismiss", function (e) {
            e.preventDefault();
            $.magnificPopup.close();
     });

    $(document).on("click", ".portfolio-item", function(){
        let portoIndex = $(this).index()-2;
        let porto = portos[portoIndex];
        let portoModal = $("#porto-modal");
        console.log(portoIndex);
        portoModal.find("img").attr("src", porto.image);
        portoModal.find(".data-title").text(porto.title);
        portoModal.find(".data-desc").text(porto.description);

        let portoModalCategoryContainer = portoModal.find(".categories");
        let portoModalCategoryItemTemplate = portoModalCategoryContainer.find(".tech-template");
        portoModalCategoryItemTemplate.show(); 
        portoModal.find(".categories>span:not(.tech-template)").remove();
        porto.techs.forEach(tech => {
            portoModalCategoryItemTemplate.removeAttr("id");
            let template = portoModalCategoryItemTemplate.clone();
            template.removeAttr("class");
            template.find("span").text(tech);      
            portoModalCategoryContainer.append(template); 
        });
        portoModalCategoryItemTemplate.hide(); 
    });
});