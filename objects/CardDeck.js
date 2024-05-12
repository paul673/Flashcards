class CardDeck {
    constructor (config) {
        this.title = config.title || null;
        this.id = null;
        this.cards = config.cards || [];
        this.confidence = 0;

        
    };

    update() {
        confidence_sum = sum_array(this.cards.map(card => card.confidence));
        this.confidence = (this.cards.length > 0) ? confidence_sum/this.cards.length : 0;
        return this.confidence 
    }
}