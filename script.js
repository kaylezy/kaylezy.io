

    let data = [
            {
                'principal':2500,
                'time':1.8,
            },
            {
                'principal':1000,
                'time':5,
            },
            {
                'principal':3000,
                'time':1,
            },
            {
                'principal':2000,
                'time':3,
            }
        ]

    function interestCalculator (data){
            let interestData = [];

            let rate, interest = null;

            data.forEach(e => {
                if (e.principal >= 2500 && e.time > 1 && e.time < 3){
                    rate = 3
                }
                else if(e.principal >= 2500  && e.time >= 3){
                    rate = 4
                }
                else if(e.principal >= 2500  && e.time >= 1){
                    rate = 2
                }
                else {
                    rate = 1
                }
            
                interest = (e.principal * rate * e.time) / 100
            
                let newData = {
                    'principal':e.principal,
                    'time':e.time,
                    'rate':rate,
                    'interest':interest
                }
                interestData.push(newData)
            }); 

            console.log(interestData);
            return interestData
        }

        interestCalculator(data)

