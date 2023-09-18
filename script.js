function calculateMinCost(arr,n) {
	//creating a que to add element of arr to perform operations 
	let pq = [];

	// adding elements to the queue
	for(let i = 0; i < n ; i++){
		pq.push(arr[i]);
	}

	// sorting the queue acc to the requirement like in the acsending order
	pq.sort(function(a,b){return a-b;});

	// variable for final result
	let res = 0;

	// while the size of queue is more than 1 
		while(pq.length > 1)
		{
			//extract the every first two ropes 
			let fisrt = pq.shift();
			let second = pq.shift();

			//Connectinng the two ropes : updating res 
			//inserting new rope and sorting it again
			res +=  first + second;
			pq.push(fisrt+second);
			pq.sort(function (a,b) {
				return a-b;				
			}) ;
		}

	return res;

	
	
  
  
  
}  
