<script>
	import '../app.css';
	let isOpen = false;
</script>

<div class="bg-yellow-300 bg-opacity-40">
    <header class="flex flex-col mx-auto py-5">
        <div class="mb-4">
            <img class="mx-auto" src="/vagabondos-yenikoy-logo.png" alt="vagabondos pizza logo">
        </div>


    
           
    </header>
    </div>
    <div class="bg-yellow-50 flex flex-col-reverse">
        <slot/>
    </div>
<div class="bg-gray-800 py-6 text-center">
	<p class="text-white text-sm">Tüm hakları saklıdır. {new Date().getFullYear()} - Vagabondos Pizza - Yeniköy / Tasarım: <a href="https://www.kentcode.com" rel="noreferrer">Kent Code</a></p>
</div>

