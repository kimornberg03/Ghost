<script>
	window.document.body.classList.toggle('dark')


	let show = true
	let password = ''

	function loginfunc(){

		if (password === "qwerty")
		{
			show = false
		}	 
		else 
		{	
			show = true
		}
	}

let Crypto = "Write your Crypotext"
let cryptoResponse = "Your text is cryptomized"
function Crypttext() {

	decryptarea.value = cryptStr(cryptoarea.value, true)

	cryptoarea.value = ""
} 


function Decrypttext() {
	
	cryptoarea.value = cryptStr(decryptarea.value, false)

	decryptarea.value = ""
}

function cryptStr(inputstr, cryt) {
	
	var returnStr = "";
	var tmpStr
	var tmpCode
	
	for (var i = 0; i < inputstr.length; i++) {
  		
		var tmpCode = inputstr.charCodeAt(i);
		
		if (cryt)
			tmpStr = String.fromCharCode(tmpCode + 1);
		else
			tmpStr = String.fromCharCode(tmpCode - 1);
		
		returnStr += tmpStr;
	}

	return returnStr;
	
	}

let src = 'neon.png';

</script>

<main>

		{#if show}
		<img src={src} alt="Ghost">

		<p>&nbsp;</p>

		<input bind:value={password} placeholder="Password">
		<button on:click={loginfunc}> Login </button>
	

		{:else}

		<textarea id="cryptoarea" textarea value={Crypto}></textarea>
		<button on:click={Crypttext}> Crypt </button>

		<p>&nbsp;</p> 
		<p>&nbsp;</p> 


		<textarea id="decryptarea" textarea value={cryptoResponse}></textarea>
		<button on:click={Decrypttext}> Decrypt </button>
		{/if}

		
</main>


<style>
	main {
		text-align: center;
		padding: 12em;
		max-width: 240px;
		margin: 0 auto;
		
	}
	
	:global(body.dark) {
		background-color: #1d3040;
	}

	button {
		background-color: #f76027;
		color: white;
		border: none;
		border-radius: 50px;
		padding: 0.75rem;
		text-transform: uppercase;
		
	}
	h1 {
		color: #ffffff;
		text-transform: uppercase;
		font-size: 7em;
		font-weight: 500;
		background-color: #1d3040;
	
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
		textarea { width: 50%; height: 200px; }
		textarea { width: 50%; height: 200px; }
	}
	
</style>

