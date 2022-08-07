const submitBtn = document.querySelector('.video-comment__btn')
const comment = document.querySelector('.play-video__input')
const commentsCont = document.querySelector('.old-comment__list')

feedbackArr = []
let positiveFeedback = false
submitBtn.addEventListener('click', submitFeedback)

function submitFeedback(e){

    const commentForm = comment.value
    // If input is not empty
    if(commentForm !== ''){
        // creat new feedBack
        newFeedback = {
            "id": Math.floor((Math.random()* 1000) +1),
            "userComment": commentForm,
            "typeOfFeedback": positiveFeedback
        }
        // add new feedback to array
        feedbackArr.push(newFeedback)
        // clear inputs
        resetForm()

        // add feedback to list
        addFeedback(newFeedback)
    }

    e.preventDefault()
}

function resetForm(){
    comment.value = ''
    positiveFeedback = false
}

function addFeedback(item){
    // creat new div
    const div = document.createElement('div')
    // add class
    div.classList = 'old-comment'
    // add id
    div.id = item.id
    // add html
    div.innerHTML = `
    <div class="old-comment__header">
                                            <div class="old-comment__user">
                                                <img src="./assets/img/nam.jpg" alt="" class="old-comment__user-img">
                                                <span class="old-comment__user-name">Đỗ Nam</span>
                                            </div>
    
                                            <span class="old-comment__time">3 weeks ago</span>
                                        </div>
    
                                        <span class="old-comment__content">
                                            ${item.userComment}
                                        </span>
    
                                        <div class="old-comment__react">
                                            <i class="fas fa-thumbs-up first"></i>
                                            <i class="fas fa-thumbs-down icon-mid"></i>
                                            <span class="old-comment__react-text">Reply</span>
                                        </div>
    `
    // Insert feedback into the list
    commentsCont.insertAdjacentElement('beforeend',div)
}

// comment.onclick = () =>{
//     submitBtn.focus();
// }





   