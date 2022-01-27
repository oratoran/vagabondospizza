<script>
	import '../app.css';
	let isOpen = false;
</script>

<div class="bg-yellow-300 bg-opacity-40">
    <header class="flex flex-col mx-auto py-5">
        <div class="mb-4">
            <img class="mx-auto" src="/vagabondos-yenikoy-logo.png" alt="vagabondos pizza logo">
        </div>

        <nav class="mobile-nav bg-yellow-100 w-1/6 mx-auto my-4 md:hidden text-center shadow-lg rounded-md" on:click="{()=>(isOpen = !isOpen)}"><span class="burger">☰</span></nav>
        <nav class="bg-yellow-100 p-4 flex flex-col md:flex-row text-center w-auto mx-auto shadow-lg rounded-md {isOpen ? 'w-full md:w-auto md:flex-row' : 'hidden md:inline-block'}" on:click="{()=>(isOpen = false)}">
            <a class="link p-2 text-lg" href="/">Ana Sayfa </a>
            <a sveltekit:prefetch class="link p-2 text-lg" href="/menu">Menümüz </a>
            <a sveltekit:prefetch class="link p-2 text-lg" href="/yenikoy-pizza-restaurant">Restaurantımız </a>
            <a sveltekit:prefetch class="link p-2 text-lg" href="/iletisim">İletişim </a>
        </nav>
    
           
    </header>
    </div>
    <div class="bg-yellow-50">
        <slot/>
    </div>
<div class="bg-gray-800 py-6 text-center">
	<p class="text-white text-sm">Tüm hakları saklıdır. {new Date().getFullYear()} - Vagabondos Pizza - Yeniköy / Tasarım: <a href="https://www.kentcode.com" rel="noreferrer">Kent Code</a></p>
</div>

