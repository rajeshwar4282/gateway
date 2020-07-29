// Used to Establish Connection with firebase 

var firebaseConfig = {
    apiKey: "AIzaSyDYUN9o8ViC1uFs3OlGhXRY5sc6sy1Fwg4",
    authDomain: "cardpay-5a0c2.firebaseapp.com",
    databaseURL: "https://cardpay-5a0c2.firebaseio.com",
    projectId: "cardpay-5a0c2",
    storageBucket: "cardpay-5a0c2.appspot.com",
    messagingSenderId: "467588252342",
    appId: "1:467588252342:web:a22115d964ac6d6bf7dc17",
    measurementId: "G-QM36RWVGC7"
  };


  firebase.initializeApp(firebaseConfig);
  var firestore=firebase.firestore();

  // Start Grabbing Our DOM Elements

  const submitBtn=document.querySelector('#submit');

  let creditcardnumber=document.querySelector('#aname');
  let nameonthecard=document.querySelector('#bname');
  let expirydate=document.querySelector('#cname');
  let cvv=document.querySelector('#dname');
  let amount=document.querySelector('#ename');


const db=firestore.collection("cards");
const db1=firestore.collection("users");
const db2=firestore.collection("notifications");

submitBtn.addEventListener('click', function()
{
    let creditcardnumberInput=creditcardnumber.value;
    let nameonthecardInput=nameonthecard.value;
    let expirydateInput=expirydate.value;
    let cvvInput=cvv.value;
    let amountInput=amount.value;
    
    // Access the Data base collection
    db.get().then(function(doc) {
        doc.forEach(function(doc1) {
            if(doc1.data().cardnumber == creditcardnumberInput){
                db1.doc(doc1.id).get().then((doc)=>{
                    username1=doc.data().username,
                    phone1 = doc.data().phone,
                   displayname1 = doc.data().displayname
                   db2.doc(doc1.id).set({
                    amount:amountInput,
                    username:username1,
                    phone:phone1,
                    displayname:displayname1
                }).then(function ()
                {
                    console.log("Thanks for Contacting US , We will Resolve the Query ASAP");
            
                })
                .catch(function(error){
                    console.log("error");
                });
           
               })
               
            }
        });
    });

    

});

