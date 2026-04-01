const IMAGES =[
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwHF-Yfhafw4mgOsR2aGRLxU8RBbR5UHWgQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfrvNrw0Z7Yk0uDhT0ryCS6agb9fEtRC_bg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXAihXiqs-Rs8WWzD59wZIJ2_C4d2EW01bg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrWgTOhHijhFD3VPIUxCeakMVQl9fKyJo4A&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAivG-Et24MeKDJbEMzRjmwMZTAn0FY2Ozhg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewaHSCeD0Zwmn8iAY_WIK-zOej65b4dOjCQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6hF8u36S3044kVegrlCmxNDwL-mN7RyaLA&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHQXk-Y2lSPiuQaieezSMWGZcVA2x-Z_w0g&s",
        ];

        let currentindex =0;
        function showCurrentIndexImage(){
            const imgElement =document.getElementById("main-image");
   
            imgElement.src = IMAGES[currentindex];
        }

        function slideleft(){
            if(currentindex = 0){
                currentindex--;
            }else{
                currentindex = IMAGES.length-1;
            } 
            showCurrentIndexImage();
        }

        function slideright(){
            if(currentindex < IMAGES.length-1){
                currentindex++;
            }else{
                currentindex =0;
            }
            showCurrentIndexImage();
        }
        function showImage(index){
            currentindex = index ;
            showCurrentIndexImage();
        }
        function createGalleryPreview(){
            const galleryPreviewContainer =document.getElementById("gallery-preview");
        
            galleryPreviewContainer.innerHTML = "";

            for(let i=0; i <IMAGES.length; i++){

                galleryPreviewContainer.innerHTML += `<img src='${IMAGES[i]}' class='preview-img' onclick ='showImage(${i})' />`;

            }
        }
         createGalleryPreview()