class App {
    constructor (config) {
        this.name = config.name || "Ola Nordmann";
        this.deck_list = null;
        this.box = 1;
        this.load();
        this.add_event_listeners();
    }

    load(config){
        // TODO: Load all decks in saves local and server
        this.deck_list = [];
    }

    add_deck(config){
        this.deck_list.push(new CardDeck(config));   
    }

    add_event_listeners(){
        
        let name_btn = document.getElementById("name");
        name_btn.addEventListener("click", () => {
            let popup = new InputPopup({
                input_fields: [
                    {
                        id: "name",
                        label: "Name: ",
                        value: this.name,
                    }
                ],
                infotext: "Haha"
            })

            popup.insert()
        })
    }

    change_name(){

    }



}