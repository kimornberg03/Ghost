import App from './App.svelte';

const app = new App({
	target: document.body,
});

export default app;

function loginfunc()
{

	if (document.getElementById('Password').value = "qwerty")
	{
		return true
	} 
	else 
	{	
		return false
	}
}
