const {createApp} = Vue;

createApp({
    data(){
        return{
            images: [
                "img/01.webp",
                "img/02.webp",
                "img/03.webp",
                "img/04.webp",
                "img/05.webp",
            ],
            imageIndex: 0
        }
    },
    methods:{
        nextButton(){
            if(this.imageIndex === this.images.length -1){
                this.imageIndex = 0
            }else{
                this.imageIndex++;
            }
        },
        prevButton(){
            if(this.imageIndex === 0){
                this.imageIndex = this.images.length - 1;
            }else{
                this.imageIndex--;
            }
        }
    }
}).mount("#carousel");