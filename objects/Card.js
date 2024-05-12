class Card {
    constructor (config) {
        this.id = null;
        this.history = []; // contains decimals 1 correct 0 false
        this.color = config.color || null;
        this.front_content = config.front_content || null;
        this.back_content = config.front_content || null;
        this.confidence = 0;

        // How many times do i have to answer correctly (Must be larger than 0)
        this.confidence_range = config.confidence_range || 3;
        this.confidence_range = (this.confidence_range < 1) ? 1 : this.confidence_range;
    };

    reset_history () {
        this.history = [];
    };

    check (answer) {
        // TODO check if answer correct and convert to number
        score = answer ? 1 : 0;

        // Update card 
        this.update(score)
        
        return score
    }

    update (score) {
        // Push answer to history
        this.history.push(score);

        // Get the last entries in the history based on the confidence range
        let start_index =  (this.history.length - this.confidence_range < 0) ? 0 :  this.history.length-this.confidence_range; 
        last_elements = this.history.slice(start=start_index);
        
        // Update confidence
        this.confidence = sum_array(last_elements)/this.confidence_range;
    }

    input_form () {
        return ``
    }


}