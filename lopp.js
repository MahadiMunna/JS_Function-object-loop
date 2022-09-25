var highSchool = 6;

while(highSchool<=10){
    console.log('Ami class '+ highSchool + ' a pori');
    highSchool++;
}

for(var i=0; i<10;i=i+2){
    console.log(i);
}

var arr=[12,34,56,45,78,98];
for(var i=0; i<arr.length;i=i+1){
    j=arr[i];
    console.log(j);
}

var arr2=['Mahadi' , 'Hasan' , 'Munna' ]
i=0
while(i<arr2.length){
    console.log(arr2[i])
    i++
}

for(var i=5; i<50;i=i+5){
    if(i>30 && i<40){
        continue
    }
    console.log(i);
}

for(var i=100; i<150;i=i+5){
    if(i>130){
       break
    }
    console.log(i);
}