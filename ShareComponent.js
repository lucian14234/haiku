import pubSub from './pubSub';

export default function() {
  const twitterBtn = document.getElementById('twitter-share');
  
  function addTwitterLink({haikuTitle, haiku}) {
    const url = "https://haiku4u
.surge.sh";
    const regex = /\s<br\s*[\/]?>\s/gi;
		const encodedHaiku = haiku.replace(regex, "%0A");
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${haikuTitle}%0A${encodedHaiku}%0A-`;

    twitterBtn.setAttribute('href', shareUrl);
  }
  
  pubSub.subscribe('generatedHaiku', addTwitterLink);
}