const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(link => {
            link.addEventListener("click", (event) => {
                event.preventDefault()
                const url = event.target.getAttribute("href")
                Router.go(url)
            })
        })
        // Event Hnadler for URL changes
        window.addEventListener("popstate", (event) => {
            Router.go(event.state.route, false)
        })
        //check the initial URL
        Router.go(location.pathname)
    },
    go: (route, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({ route }, "", route)
        }

        let pageElement = null

        switch (route) {
            case "/":
                pageElement = document.createElement("h1")
                pageElement.textContent = "Main page"
                break;
            case "/order":
                pageElement = document.createElement("h1")
                pageElement.textContent = "Order page"
                break;
            default:
                if (route.startWith("/product-")) {
                    pageElement = document.createElement("h1")
                    pageElement.textContent = "Details page"
                    const paramId = route.substring(route.lastIndexOf("-") + 1)
                    pageElement.dataset.id = paramId
                }

        }

        if (pageElement) {
            let cache = document.querySelector("main")
            cache.innerHTML = ""
            cache.appendChild(pageElement)
            window.scrollX = 0
            window.scrollY = 0
        }
    }
}

export default Router;