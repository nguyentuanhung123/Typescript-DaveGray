interface Musician {
    name: string
    instrument: string
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string;

    constructor(name: string, instrument: string) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums')); // Jimmy strums the guitar

