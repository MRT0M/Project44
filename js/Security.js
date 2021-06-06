class Security {

    constructor(){

        this.access1 = createInput().attribute("placeholder", "Code1");
        this.access2 = createInput().attribute("placeholder", "Code2");
        this.access3 = createInput().attribute("placeholder", "Code3");

        this.button1 = createButton('CHECK');
        this.button2 = createButton('CHECK');
        this.button3 = createButton('CHECK');

    }

    display(){

        this.access1.position(100, 90);
        this.access2.position(700, 190);
        this.access3.position(100, 290);

        this.button1.position(100, 120);
        this.button2.position(700, 220);
        this.button3.position(100, 320);

        this.button1.style('background', 'lightgrey');
        this.button2.style('background', 'lightgrey');
        this.button3.style('background', 'lightgrey');

        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1, this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        })

        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2, this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        })

        this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3, this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        })

    }
}

