import pubSub from './pubSub';

export default function() {
  
  const field = document.getElementById("field");
  
  pubSub.subscribe('validationErrored', () => {
    field.classList.add("error");
  });
  
  field.addEventListener("webkitAnimationEnd", () => {
    field.classList.remove("error");
  });
}

