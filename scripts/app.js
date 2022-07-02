const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelector('.controlls');
const sectionBtn = document.querySelectorAll('.control');
const body = document.querySelector('body');

const pageTransition = () =>{
    for(let i of sectionBtn){
        i.addEventListener('click', function(e){
            const {id} = e.target.dataset;
            const activeSection = document.getElementById(id);
            
            for(let btn of sectionBtn){
                btn.classList.remove('active');
            }
            this.classList.add('active');

            for(let section of sections){
                section.classList.remove('active');
            }
            activeSection.classList.add('active');
        });
    }
};

window.onload = pageTransition;