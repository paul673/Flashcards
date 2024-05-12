class App {
    constructor (config) {
        this.name = config.name || "Ola Nordmann";
        this.deck_list = null;
        this.box = 1;
        

        this.load();
        this.add_event_listeners();
    }

    init(){
        this.name_input_popup = new InputPopup({
            input_fields: [
                {
                    id: "name",
                    label: "Name: ",
                    value: this.name,
                    name: "name",
                }
            ],
            app: this,
        })

        this.name_input_popup.init();
    }

    updatename(name){
        this.name = name;
        this.name_btn.innerText=name;
    }

    load(config){
        // TODO: Load all decks in saves local and server
        this.deck_list = [];
    }

    add_deck(config){
        this.deck_list.push(new CardDeck(config));   
    }

    add_event_listeners(){
        
        this.name_btn = document.getElementById("name");
        this.name_btn.addEventListener("click", () => {
            this.name_input_popup.insert()
        })
    }

    change_name(){

    }



}