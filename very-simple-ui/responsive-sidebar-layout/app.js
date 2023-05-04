let burg = document.querySelector(".burger");
       let nav = document.querySelector(".nav-links");
       let bg = document.querySelector(".overlay");

       burg.addEventListener("click", 
       ()=> {
           nav.classList.toggle("show");
           bg.classList.toggle("black-overlay")
           
       } 
       )
       bg.addEventListener("click", () => 
       {
        nav.classList.toggle("show");
           bg.classList.toggle("black-overlay")
       })

    //    let contdiv = document.querySelector(".main");
    //    const newelement = document.createElement("h2");
    //    newelement.className = "test-text";

    //    contdiv.appendChild(newelement);
    //    newelement.innerHTML = "Hello";
       
       window.onload = () => {
       const pageids = document.querySelectorAll('[data-switcher]' );
    //    console.log(pageids)

        for( let i=0; i<pageids.length; i++) {
            const switcher = pageids[i];
            const pageid = switcher.dataset.tab;
            // console.log(switcher)
            // console.log(pageid)
            
            // console.log('l')

            switcher.addEventListener("click", () => {
                document.querySelector('.is-active').classList.remove('is-active');
                switcher.parentNode.classList.add('is-active')
                // console.log(pageid)

                SwitchPage(pageid);
            })
        }
       }

       function SwitchPage(pageid) {
           const curr_page = document.querySelector('.page.is-shown');
           curr_page.classList.remove('is-shown');

           const next_page = document.querySelector(`.pages .page[data-page="${pageid}"]`)
           next_page.classList.add('is-shown')
           
        //    console.log(curr_page)
       }
       
    //    Card transition
    //     const cards = document.querySelectorAll('[data-card]' );
    //    console.log(cards)
    //    cards.forEach(element => {
    //        const cid = element.dataset.card;
    //        console.log(element);
    //     //    console.log(cid)
    //        element.addEventListener("click", ()=>
    //        {
    //         const curr_select = document.querySelector(`[data-card="${element.dataset.card}"]`)   
    //         // console.log(curr_select)
    //         curr_select.classList.add('move-front');
    //         const not_select = document.querySelectorAll(`[data-card]:not([data-card="${element.dataset.card}"])`)
    //         // console.log(not_select)
    //         not_select.forEach(a => {
    //             a.classList.add('card-gone');
    //             console.log(a.dataset.card)
    //         })
            // for (let i=0; i<=cards.length; i++){
            //     if(i != element.dataset.card) {
            //         const not_select = document.querySelector(`[data-card="${i}"`)
            //         console.log(not_select);
            //     }
            //     else {
            //         console.log('oui')
                // }

        //     }
                
        //     // }
        //     )
        //    })
        //    const le = length(cards)
        //    console.log('l')
           
 
           
       
       
    //    const btn = document.querySelector("#clkk");
    // //    console.log(btn)
    //    btn.addEventListener("click", () => {
    //         const card1 = document.querySelector("#card1");
    //         const card2 = document.querySelector('#card2');
    //         // console.log(card1)
    //         card1.classList.add('card-gone')
    //         card2.classList.add('move-front')
            

    //    }
    //    )
