var myApp=angular.module("app",['ngAnimate','ngCookies']);
myApp.controller("controller",
function ($scope, $http, $cookies, $window){



/*------------------------------------------LIST OF COURses--------------------------------------------------*/

 var ch=['1 IC250 Materials Chemistry II 2 B12 X112 TBA Dr. Arup Mukherjee'
,'2 IC251 Basics of Bioinformatics 4 B36 X136 TBA Dr. Rukmankesh'
,'3 IC601 Research Methodology 6 A16 TBA Dr. Sanjib Banerjee'
,'4 CA250 Professional Ethics 2 K56 TBA Dr. Nagesh Patil'
,'5 CS101 Discrete Structures I 4 NA TBA Dr. Barun Gorain'
,'6 CS102 Data Structures 4 NA TBA Dr. Soumajit'
,'7 CS250 Operating Systems 4 D36 TBA Dr. Amit Dhar'
,'8 CS251 Introduction to Language Processing 4 F14 TBA Dr. Vishwesh Jatala'
,'9 CS252 Algorithms II 4 H36 TBA Dr. Vinod Reddy'
,'10 CS253 Theory of Computation II 2 D12 TBA Dr. Rishi Ranjan Singh'
,'11 CS254 Database Management Systems 4 L14 TBA Dr. Subhajit Siddhanta'
,'12 CS499 Thesis (BTech) 6 to 24 NA TBA Dr. Prashant Agnihotri'
,'13 CS503 Lightweight Cryptography 6 L16 TBA Dr. Dhiman Saha'
,'14 CS510 Approximation Algorithm 6 C16 TBA Dr. Barun Gorain (IC) Dr. Amit Kumar Dhar'
,'15 CS511 Introduction to Formal Verification and Its Applications 6 E16 TBA Prof. Santosh Biswas'
,'16 CS552 Network Science 6 I16 TBA Dr. Rishi Ranjan Singh'
,'17 CS550 Machine Learning 6 H16 TBA Dr. SK Subidh Ali'
,'18 CS599 Thesis (MTech) 6 to 24 NA TBA Dr. Souradyuti Paul'
,'19 CS608 Advanced Graph Algorithms 6 A16 TBA Dr. Vinod Reddy'
,'20 CS799 Thesis (PhD) 6 to 24 NA TBA Dr. Souradyuti Paul'
,'21 CY201 Surface Phenomena and Electrochemistry 2 L56 TBA Dr. Satyajit Gupta'
,'22 CY202 Applied Chemistry 2 L12 TBA Dr. Arup Mukherjee'
,'23 CY203 An Introduction to Food Science and Technology 2 F56 TBA Dr. Arup Mukherjee'
,'24 CY507 Statistical Mechanics and Thermodynamics 4 I36 TBA Dr. Rukmankesh'
,'25 CY508 Molecular Spectroscopy 4 D14 TBA Dr. Satyajit Gupta'
,'26 CY509 Bioinorganic Chemistry 6 A16 TBA Dr. Suchetan Pal'
,'27 CY510 Stereochemistry and Reaction Mechanism 6 K16 TBA Dr. Ganapathy D (IC) Dr. Sanjib Banerjee'
,'28 CY511 Physical Organic Chemistry 2 H56 TBA Dr. Sanjib Banerjee'
,'29 CY512 Thermal and Photochemical Reactions 4 H14 TBA Dr. Raghavendra Medishetty'
,'30 CY513 Physical Chemistry Practical 2 S36 TBA Dr. Suchetan Pal (IC) Dr. Satyajit Gupta'
,'31 CY514 Organic Chemistry Practical 2 V14 TBA Dr. Sanjib banerjee (IC) Dr. Ganapathy D'
,'32 CY617 Introduction to Solar Energy Material 2 F12 TBA Dr. Satyajit Gupta'
,'33 CY622 Introduction to Molecular Modelling 2 F34 TBA Dr. Rukmankesh'
,'34 CY623 Chemistry of life 6 C16 TBA Dr. Suchetan Pal'
,'35 CY624 Chemistry of Heterocyclic Compounds and Natural Products 6 G16 TBA Dr. Ganapathy D'
,'36 CY627 An Introduction to Catalyst Design: Function and Application 2 L34 TBA Dr. Arup Mukherjee'
,'37 CY628 Nano-engineered Molecular Materials 6 E16 TBA Dr. Sanjib Banerjee'
,'38 CY629 Introduction to health, Safety and Environmental Practices 2 C34 TBA Dr. Ganapathy D'
,'39 CY699 Project 18 NA TBA Dr. Satyajit Gupta'
,'40 CY799 Thesis 24 NA TBA Dr. Satyajit Gupta'
,'41 EE126 EE Independent Project 1 NA TBA Dr. Avishek Adhikary'
,'42 EE204 Analog Circuits 6 L16 TBA Dr. Kapil Jainwal'
,'43 EE205 Power Engineering I 6 D16 TBA Dr. Prashant Agnihotri'
,'44 EE208 Electrical Machines 4 K14 TBA Dr. Arzad Alam Kherani'
,'45 EE226 Electrical Engineering Lab I 1 S56 TBA Dr. Nikhil Chander'
,'46 EE251 Electrical Engineering Lab I 2 S36 TBA Dr. Nikhil Chander'
,'47 EE326 Electrical Engineering Lab IV 1 U56 TBA Dr. Arzad Alam Kherani'
,'48 EE328 Independent Project 1 NA TBA Dr. Arzad Alam Kherani'
,'49 EE352 Electrical Engineering Lab III 2 S14 TBA Dr. Kapil Jainwal'
,'50 EE353 Electrical Engineering Lab IV 2 U36 TBA Dr. Arzad Alam Kherani'
,'51 EE371 Independent Project 2 NA TBA Dr. Arzad Alam Kherani'
,'52 EE499 Thesis (BTech) 6 to 24 NA TBA Dr. Prashant Agnihotri'
,'53 EE529 Introduction to Wireless and Cellular Communications 6 L16 TBA Dr. Sreejith T V'
,'54 EE599 Thesis (MTech) 6 to 24 NA TBA Dr. Souradyuti Paul'
,'55 EE601 Solar Photovoltaic Devices and Systems 6 K16 TBA Dr. Nikhil Chander'
,'56 EE605 6 I16 TBA Dr. Anand Baswade'
,'57 EE701 6 J16 TBA Dr. Arzad Alam Kherani'
,'58 EE799 24 NA TBA Dr. Souradyuti Paul'
,'59 LA303 1 G11 TBA Ms. Hao Yu Lu'
,'60 LA308 2 J12 TBA Dr. Anindita Ghosh'
,'61 LA311 2 J34 TBA Ms. Hao Yu Lu'
,'62 LA312 2 G56 TBA Ms. Hao Yu Lu'
,'63 LA315 1 G22 TBA Ms. Hao Yu Lu'
,'64 LA324 2 J34 TBA Dr. Anindita Ghosh'
,'65 LA326 2 J12 TBA Dr. Sonal Jha'
,'66 LA327 2 J34 TBA Dr. Sonal Jha'
,'67 LA329 2 G34 TBA Dr. Sitakanta Panda'
,'68 LA332 1 G44 TBA Ms. Hao Yu Lu'
,'69 LA333 1 J22 TBA Ms. Hao Yu Lu'
,'70 LA328 Economic Development in India 2 G56 TBA Dr. Sitakanta Panda'
,'71 LA344 Introduction to English Romantic Poetry 2 G34 TBA Dr. Thirthankar Chakraborty'
,'72 LA351 Elements of World Literature 2 G12 TBA Dr. Thirthankar Chakraborty'
,'73 LA354 Introduction to Postcolonial Literature 2 J56 TBA Dr. Sonal Jha'
,'74 LA355 Chinese Basic 4 1 J11 TBA Ms. Hao Yu Lu'
,'75 LA356 Chinese Basic 5 1 G33 TBA Ms. Hao Yu Lu'
,'76 LA357 Chinese Basic 6 1 J55 TBA Ms. Hao Yu Lu'
,'77 LA358 Game Theory 2 G12 TBA Dr. Radeef Chundakkadan'
,'78 LA799 Thesis 24 NA TBA Dr. Anindita Ghosh'
,'79 MA505 Complex Analysis 6 A16 TBA Dr. Anuj Jakhar'
,'80 MA506 Multi-Variable Calculus 4 C14 TBA Dr. Raj Kumar Mistri'
,'81 MA507 Numerical Techniques 6 E16 TBA Prof. P. D. Srivastava'
,'82 MA508 Topology 6 G16 TBA Dr. Asrifa Sultana'
,'83 MA606 Partial Differential Equations 6 K16 TBA Dr. Pawan Kumar Mishra'
,'84 MA610 Operator Theory 6 J16 TBA Dr. Avijit Pal'
,'85 MA611 Stochastic Processes 6 L16 TBA Dr. Kuldeep Kumar Kataria'
,'86 MA614 Introductory Additive Number Theory 6 B16 TBA Dr. Raj Kumar Mistri'
,'87 MA699 Project 18 NA TBA Dr. Kuldeep Kumar Kataria'
,'88 MA799 Thesis 6 to 24 NA TBA Dr. Kuldeep Kumar Kataria'
,'89 ME213 Heat and Mass Transfer 6 H16 TBA Dr. Udayraj'
,'90 ME232 Dynamics 6 F16 TBA Dr. Anshul Faye'
,'91 ME334 Design of Machine Elements 6 A16 TBA Dr. Purnendu Das'
,'92 ME351 Metrology, Measurements and 4 K36 TBA Dr. Jose Immanuel R'
,'93 ME352 Manufacturing Science II 6 D16 TBA Dr. Soumya Gangopadhyay'
,'94 ME371 Mechanical Engineering Lab 1 3 S16 TBA Dr. Anshul Faye (IC) Dr. Vijay S Duryodhan'
,'95 ME372 Mechanical Engineering Lab 2 3 U16 TBA Dr. Rahul Jain Dr. Udayraj'
,'96 ME499 Thesis (BTech) 6 to 24 NA TBA Dr. Anshul Faye'
,'97 ME513 Convective Heat Transfer 6 H16 TBA Dr. Vijay S Duryodhan (IC) Dr. Udayraj'
,'98 ME515 Engine Management System 6 B16 TBA Dr. Pravesh Shukla'
,'99 ME556 Fluid Power Systems 4 H16 TBA Dr. Jose Immanuel R'
,'100 ME558 Surface Engineering 6 L16 TBA Dr. Purnendu (IC) Dr. Soumya Gangopadhyay'
,'101 ME599 Thesis (MTech) 6 to 24 NA TBA Dr. Balkrishna Mehta'
,'102 ME613 Microfluidics 6 K16 TBA Dr. Vijay S Duryodhan'
,'103 ME616 Interfacial Transport Phenomena 6 L16 TBA Dr. Nagesh D. Patil'
,'104 ME632 Fracture Mechanics 6 B16 TBA Dr. Anshul Faye'
,'105 ME633 Finite Element Methods 6 I16 TBA Dr. Rahul Jain'
,'106 ME799 Thesis (PhD) 6 to 24 NA TBA Dr. Balkrishna Mehta'
,'107 PH205 Relativity 2 C56 TBA Dr. Sabyasachi Ghosh'
,'108 PH505 Electronics Laboratory 6 I16 TBA Dr. Dhriti S. Ghosh'
,'109 PH507 Quantum Mechanics-II 6 E16 TBA Dr. Sesha Vempati'
,'110 PH508 Electrodynamics 6 A16 TBA Dr. Dhriti S. Ghosh'
,'111 PH509 Nuclear and Particle Physics 6 C16 TBA Dr. Sudhanwa Patra'
,'112 PH510 Experimental Laboratory 6 X16, V16 TBA Dr. Sesha Vempati'
,'113 PH517 Astrophysics and Cosmology 6 H16 TBA Dr. Mahavir Sharma'
,'114 PH605 Quantum Field Theory 6 F16 TBA Dr. Sabyasachi Ghosh'
,'115 PH606 Particle Physics 6 D16 TBA Dr. Sudhanwa Patra'
,'116 PH699 MSc(Project) 18 NA TBA Dr. Sesha Vempati'
,'117 PH798 Independent Study: High Energy Nuclear Physics 6 NA TBA Dr. Sabyasachi Ghosh'
,'118 PH799 Thesis (Phd) 6 to 24 NA TBA Dr. Sesha Vempati'];


/*-----------------------------------------------------------------------------------------------------------*/





/*--------------------------------------BACKGROUND COLOR GRADIENT--------------------------------------------*/
/*    $scope.getBgImgObj= function(item){
        return {
            'background-image': "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,.95), rgba(0,0,0,.88))"
        }
    }       */
/*----------------------------------------------------------------------------------------*/





/*-----------------------------------VARIABLES--------------------------------------------*/
    $scope.monday_1=['A', 'R', 'R', '', 'M', 'M'];
    $scope.monday_2=['A', 'B', 'C', '', 'H', 'I'];
    $scope.tuesday_1=['D', 'S', 'S', '', 'N', 'N'];
    $scope.tuesday_2=['D', 'E', 'F', '', 'J', 'H'];
    $scope.wednesday_1=['G', 'T', 'T', '', 'O', 'O'];
    $scope.wednesday_2=['G', 'X', 'A', '', 'I', 'L'];
    $scope.thursday_1=['B', 'U', 'U', '', 'P', 'P'];
    $scope.thursday_2=['B', 'C', 'D', '', 'K', 'J'];
    $scope.friday_1=['E', 'V', 'V', '', 'Q', 'Q'];
    $scope.friday_2=['E', 'F', 'G', '', 'K', 'L'];

    $scope.monday=['----', '----', '----', '----', '----', '----'];
    $scope.tuesday=['----', '----', '----', '----', '----', '----'];
    $scope.wednesday=['----', '----', '----', '----', '----', '----'];
    $scope.thursday=['----', '----', '----', '----', '----', '----'];
    $scope.friday=['----', '----', '----', '----', '----', '----'];

    $scope.val=[0, 0, 0, 0, 0];
    $scope.value=0;
    var course_list=null;
/*----------------------------------------------------------------------------------------*/





/*------------------------FUNCTION THAT RETURNS MATCHED COURSE CODE-----------------------*/
function getcode(str){
var letternumber = /^[0-9a-zA-Z]+$/;
var valq="";
var res=[];
var code,ind=0;


    for(var ui=0; ui<ch.length;ui++)
     {
         var temp = ch[ui].split(' ');
         for(var bi=0; bi<temp.length;bi++)
            res[ind++] = temp[bi];
     }

    var i=0;
    while(i<res.length)
       {
           if(!res[i].localeCompare(str))
           {

               j=i+1;
               while(j<res.length)
               {
                   var t1=false,t2=false,t3=true;
                
                   if(res[j][0]=='N'&&res[j][1]=='A')
                       {
                         return res[j];
                       }


                   for(var u=0; u<res[j].length;u++)
                   {
                       code = res[j].charCodeAt(u);
                       if((code > 47 && code < 58))
                          {
                              t1 = true;
                          }
                       else if((code > 64 && code < 91))
                          {
                              t2 = true;
                          }
                       else
                          {
                              t3 = false;
                          }

                   }

                   if(t1 && t2 && t3)
                   {
                       i=res.length;
                       break;
                   }
                   j++;
               }
           }
           i++;
       }


    var t1=false,t2=false,t3=true;
    for(var u=0; u<res[j+1].length;u++)
                   {
                       code = res[j+1].charCodeAt(u);
                       if((code > 47 && code < 58))
                          {
                              t1 = true;
                          }
                       else if((code > 64 && code < 91))
                          {
                              t2 = true;
                          }
                       else
                          {
                              t3 = false;
                          }

                   }

    if(t1 && t2 && t3)
    {
       valq= valq + res[j] + ',' + res[j+1];
    }

    else
    {
       valq= valq + res[j];
    }

    return valq;
}
/*----------------------------------------------------------------------------------------*/





/*---------------------CHECKS IF ENTERED STRING IS IS VALID OR NOT------------------------*/
function validate(){

var str = document.getElementById("searchbar").value;
var t1=false,t2=false,t3=false, t4=false,x,y;

    for(var j=0; j<str.length;j++)
                   {
                       var code = str.charCodeAt(j);
                       x=44;                           //44 is ASCII code of comma.
                       y=32;                           //44 is ASCII code of space.

                       if((code > 47 && code < 58))
                          {
                              t1 = true;
                          }
                       else if((code > 64 && code < 91) || (code > 96 && code < 123))
                          {
                              t2 = true;
                          }
                       else if(code == x || code == y)
                          {
                              t3 = true;
                          }
                       else
                          {
                              t4 = true;
                          }

                   }

    if(t1 && t2 && !t4)
              {
                 return 1;
              }

    return 0;

}
/*----------------------------------------------------------------------------------------*/






/*-------------------------FUNCTION THAT HANDLES TABLE LIST DISPLAY-----------------------*/
    $scope.toggle = function(ind){

    $scope.val[ind]=!($scope.val[ind]);

         if(ind!=-1)
         {
           var final= [0, 0, 0, 0, 0];
           var j, i;
           for(j=0;j<5;j++)
           {
             for(i=j-1;i>=0;i--)
             {
               if($scope.val[i]==1)
               {
                   final[j-1]= j-1-i;
                   break;
               }
             }

             if(i==-1 && j!=0)
             final[j-1] = j;
             if(j==0)
             final[j] = j;
           }

           for(j=0;j<4;j++)
           {
               final[j]= 15*(final[j]);
               if(j==0)
               document.documentElement.style.setProperty('--a', final[j] + "%");
               if(j==1)
               document.documentElement.style.setProperty('--b', final[j] + "%");
               if(j==2)
               document.documentElement.style.setProperty('--c', final[j] + "%");
               if(j==3)
               document.documentElement.style.setProperty('--d', final[j] + "%");
           }


         }

         else
         {

           document.documentElement.style.setProperty('--a', 0 + "%");
           document.documentElement.style.setProperty('--b', 0 + "%");
           document.documentElement.style.setProperty('--c', 0 + "%");
           document.documentElement.style.setProperty('--d', 0 + "%");


           if($scope.val[0]==0 || $scope.val[1]==0 || $scope.val[2]==0 || $scope.val[3]==0 || $scope.val[4]==0 )
           {
               for(var i=0;i<5;i++)
                  $scope.val[i]=1;
           }

           else
           {
               for(var i=0;i<5;i++)
                  $scope.val[i]=0;
           }
         }

           $scope.value=!($scope.value);
    };
/*----------------------------------------------------------------------------------------*/






/*--------------------------------------Cookies-------------------------------------------*/
$scope.Getcookies = function(){

    course_list= $cookies.get('courselist');

    if(course_list!=null)
    $scope.dev();
}

$scope.Setcookies = function(stg){

   var now = new Date();
   var exp = new Date(now.getFullYear()+1, now.getMonth(), now.getDate());

   $cookies.put("courselist", stg, {expires: exp});


}
/*----------------------------------------------------------------------------------------*/







/*---------------------------------CALCULATES TIME TABLE-----------------------------------*/
    $scope.dev = function(){

      var course_match="";
      var entered_str=null;
      var str1 = document.getElementById("searchbar").value;
      entered_str= str1.toUpperCase();
      var xy=validate();

      if(xy===1)
      {
          $scope.Setcookies(entered_str);
      }

      else
      {
       if(entered_str!="")
        window.alert("Invalid Course Code");

       entered_str= course_list;
       xy=1;
      }

      var clash=0, letter_1,letter_last, letter_second_last;



      if(xy===1 && entered_str!=null){

      $scope.monday=['----', '----', '----', '----', '----', '----'];
      $scope.tuesday=['----', '----', '----', '----', '----', '----'];
      $scope.wednesday=['----', '----', '----', '----', '----', '----'];
      $scope.thursday=['----', '----', '----', '----', '----', '----'];
      $scope.friday=['----', '----', '----', '----', '----', '----'];




         var entered_value= entered_str.split(',');
         var i=0,code;
         while(i<entered_value.length)
          {
           if( entered_value[i][0]===' '){
            entered_value[i] = entered_value[i].substring(1,entered_value[i].length);
          }
          i++;
         }

         i=0;
         while(i<entered_value.length)
          {
              var t1=false,t2=false,t3=true;

              for(var j=0; j<entered_value[i].length;j++)
                {
                       code = entered_value[i].charCodeAt(j);

                       if((code > 47 && code < 58))
                          {
                              t1 = true;
                          }
                       else if((code > 64 && code < 91))
                          {
                              t2 = true;
                          }
                       else
                          {
                              t3 = false;
                          }

               }

              if(t1 && t2 && t3)
                {
                  var get_val = getcode(entered_value[i]);
                  var result= get_val.split(",");

                  var i1=0;
                  while(i1<result.length){
                   
                  if(result[i1][0]=='N'&&result[i1][1]=='A')
                    break;

                  letter_1=result[i1][0];
                  if(i1===0)
                  {
                        letter_last=result[i1][result[i1].length-1];
                        letter_second_last=result[i1][result[i1].length-2];
                  }
                  else
                  {
                      letter_last="t";
                      letter_second_last="Tu";
                  }

                  for(var o=0;o<6;o++){



                       if( $scope.monday_1[o]==letter_1 || $scope.monday_2[o]==letter_1 )
                       {
                          var compae=$scope.monday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.monday[o].substr(0,5);

                              if($scope.monday[o][$scope.monday[o].length-3]>letter_last || $scope.monday[o][$scope.monday[o].length-2]<letter_second_last )
                               {
                                    $scope.monday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                              if(letter_1==='X')
                                    $scope.monday[o]=$scope.monday[o] + ' (T)';
                          }
                          else
                               $scope.monday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';

                       }



                       if( $scope.tuesday_1[o]==letter_1 || $scope.tuesday_2[o]==letter_1 )
                       {
                          var compae=$scope.tuesday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.tuesday[o].substr(0,5);

                              if($scope.tuesday[o][$scope.tuesday[o].length-3]>letter_last || $scope.tuesday[o][$scope.tuesday[o].length-2]<letter_second_last )
                               {
                                    $scope.tuesday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                           if(letter_1==='X')
                                    $scope.tuesday[o]=$scope.tuesday[o] + ' (T)';
                          }
                          else
                               $scope.tuesday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';

                       }




                       if( $scope.wednesday_1[o]==letter_1 || $scope.wednesday_2[o]==letter_1 )
                       {
                          var compae=$scope.wednesday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.wednesday[o].substr(0,5);

                              if($scope.wednesday[o][$scope.wednesday[o].length-2]<letter_last || $scope.wednesday[o][$scope.wednesday[o].length-3]>letter_second_last )
                               {
                                    $scope.wednesday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                              if(letter_1==='X')
                                    $scope.wednesday[o]=$scope.wednesday[o] + ' (T)';
                          }
                          else
                               $scope.wednesday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';


                       }




                       if( $scope.thursday_1[o]==letter_1 || $scope.thursday_2[o]==letter_1 )
                       {
                         var compae=$scope.thursday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.thursday[o].substr(0,5);

                              if($scope.thursday[o][$scope.thursday[o].length-2]<letter_last || $scope.thursday[o][$scope.thursday[o].length-3]>letter_second_last )
                               {
                                    $scope.thursday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                              if(letter_1==='X')
                                    $scope.thursday[o]=$scope.thursday[o] + ' (T)';
                          }
                          else
                               $scope.thursday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';


                          }


                       if( $scope.friday_1[o]==letter_1 || $scope.friday_2[o]==letter_1 )
                       {
                         var compae=$scope.friday[o][0];
                          if(compae!='-')
                          {
                              var remain=$scope.friday[o].substr(0,5);

                              if($scope.friday[o][$scope.friday[o].length-2]<letter_last || $scope.friday[o][$scope.friday[o].length-3]>letter_second_last )
                               {
                                    $scope.friday[o]=remain + ', ' + entered_value[i];
                               }
                              else
                               {
                                    window.alert(entered_value[i] +', ' + remain + ' are clashing.');
                                    clash=1;
                                    break;
                               }

                           if(letter_1==='X')
                                    $scope.friday[o]=$scope.friday[o] + ' (T)';
                          }
                          else
                               $scope.friday[o]=entered_value[i] + '(' + letter_second_last + letter_last + ')';

                       }



                  }
                  i1++;
                  }
                }

          i++;
        }

        if($scope.val[0]==0 || $scope.val[1]==0 || $scope.val[2]==0 || $scope.val[3]==0 || $scope.val[4]==0 )
             $scope.toggle('-1');

      }

    else{
        ;
      }

    if(clash===1){
         $scope.Setcookies("");

         $scope.monday=['----', '----', '----', '----', '----', '----'];
         $scope.tuesday=['----', '----', '----', '----', '----', '----'];
         $scope.wednesday=['----', '----', '----', '----', '----', '----'];
         $scope.thursday=['----', '----', '----', '----', '----', '----'];
         $scope.friday=['----', '----', '----', '----', '----', '----'];
      }

};
/*----------------------------------------------------------------------------------------*/


});





