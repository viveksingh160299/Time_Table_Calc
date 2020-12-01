var myApp=angular.module("app",['ngAnimate','ngCookies']);
myApp.controller("controller",
function ($scope, $http, $cookies, $window){



/*------------------------------------------LIST OF COURses--------------------------------------------------*/

 var ch=['1 IC200 Introduction to Astronomy and Astrophysics 4 B36 https://iitbhilai.webex.com/meet/b107 Dr. Mahavir Sharma '
,'2 IC201 Environmental Studies 2 B12 X112 https://iitbhilai.webex.com/meet/b107 Dr. Raghavender Medishetty                 '
,'3 IC202 Calculus II 3 D36 X136 https://iitbhilai.webex.com/meet/b107 Dr. Avijit Pal                                       '
,'4 IC300 Materials Chemistry III 2 D12 X112 https://iitbhilai.webex.com/meet/b204 Dr. Satyajit Gupta                       '
,'5 IC601 Research Methodology 6 A16 https://iitbhilai.webex.com/meet/b202 Dr. Sanjib Banerjee                              '
,'6 CA200 Professional Communication Lab-IIITechnical Literature Structure 1 P56 https://iitbhilai.webex.com/meet/b303 Dr. Thirthankar Chakraborty, Dr. Ganapathy D  '
,'7 CS200 Software Tool and Technologies Lab-II 4 I36 https://iitbhilai.webex.com/meet/b203 Dr. Dhiman Saha                 '
,'8 CS201 Discrete Structures II 2 F12 https://iitbhilai.webex.com/meet/b304 Dr. Barun Gorain                               '
,'9 CS202 Algorithms I 4 F36 https://iitbhilai.webex.com/meet/b302 Dr. Vinod Kumar Reddy                                    '
,'10 CS203 Theory of Computation I 4 H14 https://iitbhilai.webex.com/meet/b204 Dr. Rishi Ranjan Singh                       '
,'11 CS204 Computer Organization & Architecture 4 J14 https://iitbhilai.webex.com/meet/b202 Dr. S K Subidh Ali              '
,'12 CS300 Principles of Programming Languages 6 E16 https://iitbhilai.webex.com/meet/b204 Dr. Subhajit Sidhanta            '
,'13 CS301 Computer Networks 6 A16 https://iitbhilai.webex.com/meet/b203 Dr. Baswade Anand Madhavrao                        '
,'14 CS499 Thesis 6 to 24 NA NA Dr. Barun Gorain                                                                            '
,'15 CS500 Science of Computation 3 E13 https://iitbhilai.webex.com/meet/b104 Dr. Souradyuti Paul                           '
,'16 CS501 Computer Systems 3 E46 https://iitbhilai.webex.com/meet/b203 Dr. Santosh Biswas                                  '
,'17 CS502 Graph Theory and Applications 6 G16 https://iitbhilai.webex.com/meet/b103 Dr. Vinod Kumar Reddy                  '
,'18 CS505 Big Data Analytics 6 C16 https://iitbhilai.webex.com/meet/b204 Dr. Subhajit Sidhanta                             '
,'19 CS511 Introduction to Formal Verification and Its Application 6 K16 https://iitbhilai.webex.com/meet/b304 Dr. Amit Kumar Dhar '
,'20 CS553 Cryptography 6 J16 https://iitbhilai.webex.com/meet/b204 Dr. Dhiman Saha                                         '
,'21 CS558 CAD for VLSI 6 H16 https://iitbhilai.webex.com/meet/b302 Dr. Santosh Biswas                                      '
,'22 CS599 Thesis 6 to 24 NA NA Dr. Souradyuti Paul                                                                         '
,'23 CS607 Adversarial Machine Learning: Security and Privacy of ML 6 D16 https://iitbhilai.webex.com/meet/b102 Dr. S K Subidh Ali '
,'24 CS610 Lower Bounds and Impossibility 6 E16 https://iitbhilai.webex.com/meet/b304 Dr. Barun Gorain                      '
,'25 CS611 Wireless Network & Mobile Data Management 6 B16 https://iitbhilai.webex.com/meet/b204 Prof. R K Ghosh            '
,'26 CS613 Social and Complex Network Analysis 6 I16 https://iitbhilai.webex.com/meet/b104 Dr. Rishi Ranjan Singh           '
,'27 CS799 Thesis 6 to 24 NA NA Dr. Souradyuti Paul                                                                         '
,'28 CY201 Surface phenomena and electrochemistry 2 H56 https://iitbhilai.webex.com/meet/b204 Dr. Satyajit Gupta            '
,'29 CY515 Computations in Chemistry 2 J56 https://iitbhilai.webex.com/meet/b202 Dr. Md. Mehboob Alam                       '
,'30 CY603 Organometallic Chemistry: Principles and Applications 6 H16 https://iitbhilai.webex.com/meet/b202 Dr. Arup Mukherjee '
,'31 CY604 Solid State Chemistry 4 D36 https://iitbhilai.webex.com/meet/b202 Dr. Raghavender Medishetty                     '
,'32 CY605 Advanced Organic Chemistry 6 I16 https://iitbhilai.webex.com/meet/b304 Dr. Ganapathy D                           '
,'33 CY607 Interpretative Molecular Spectroscopy 6 G16 https://iitbhilai.webex.com/meet/b104 Dr. Suchetan Pal               '
,'34 CY614 Biomaterials Science and Engineering 2 F56 https://iitbhilai.webex.com/meet/b304 Dr. Suchetan Pal                '
,'35 CY622 Introduction to Molecular Modeling 2 F34 https://iitbhilai.webex.com/meet/b304 Dr. Rukmankesh                    '
,'36 CY699 Project 6 NA NA Dr. Sanjib Banerjee                                                                              '
,'37 CY799 Thesis 6 to 24 NA NA Dr. Sanjib Banerjee                                                                         '
,'38 DS250 Data Analytics and Visualization 6 H16 https://iitbhilai.webex.com/meet/b203 Dr. Gagan Raj Gupta                 '
,'39 EE201 Electronic Devices 4 I36 https://iitbhilai.webex.com/meet/b102 Dr. Kapil Jainwal                                 '
,'40 EE202 Control Systems - I 6 F16 https://iitbhilai.webex.com/meet/b204 Dr. Avishek Adhikary                             '
,'41 EE203 Embedded Systems 4 H36 https://iitbhilai.webex.com/meet/b207 Dr. Arzad Alam Kherani                              '
,'42 EE207 Engineering Electromagnetics 4 J14 https://iitbhilai.webex.com/meet/b203 Dr. Nikhil Chander                      '
,'43 EE301 Communication Systems 4 A14 https://iitbhilai.webex.com/meet/b103 Dr. Sreejith T. V                              '
,'44 EE499 Thesis 6 to 24 NA NA Dr. Barun Gorain                                                                            '
,'45 EE507 Sensors, Measurement, and Instrumentation 6 H16 https://iitbhilai.webex.com/meet/b104 Dr. Avishek Adhikary       '
,'46 EE509 Power Electronics 6 B16 https://iitbhilai.webex.com/meet/b203 Dr. Prashant Agnihotri                             '
,'47 EE599 Thesis 6 to 24 NA NA Dr. Souradyuti Paul                                                                         '
,'48 EE601 Solar Photovoltaic Devices and Systems 6 I16 https://iitbhilai.webex.com/meet/b103 Dr. Nikhil Chander            '
,'49 EE606 5G Nr Systems: Physical Layer Aspects 6 C16 https://iitbhilai.webex.com/meet/b104 Dr. Sreejith T. V              '
,'50 EE777 Mobile Communications Systems 6 J16 https://iitbhilai.webex.com/meet/b104 Dr. Arzad Alam Kherani Dr. Baswade Anand Madhavrao, Dr. Gagan Raj Gupta '
,'51 EE798 Independent Study: Smart Radio Environments 6 NA NA Dr. Arzad Alam Kherani Dr. Sreejith T. V                     '
,'52 EE799 Thesis 6 to 24 NA NA Dr. Souradyuti Paul                                                                         '
,'53 LA302 Indian Writing in English 2 D12 https://iitbhilai.webex.com/meet/b202 Dr. Thirthankar Chakraborty                '
,'54 LA303 Chinese Language Beginner’s-1 1 D11 https://iitbhilai.webex.com/meet/b203 Ms Hao-Yu Lu                           '
,'55 LA308 Positive Psychology 2 L12 https://iitbhilai.webex.com/meet/b204 Dr. Anindita Ghosh                               '
,'56 LA311 Chinese Language Beginner’s-3 2 C34 https://iitbhilai.webex.com/meet/b202 Ms. Hao-Yu Lu                          '
,'57 LA312 Chinese Language Beginner’s-4 2 C12 https://iitbhilai.webex.com/meet/b202 Ms. Hao-Yu Lu                          '
,'58 LA315 Chinese Language Beginner’s-2 1 D22 https://iitbhilai.webex.com/meet/b203 Ms. Hao-Yu Lu                          '
,'59 LA320 Chinese Basic 3 1 L33 https://iitbhilai.webex.com/meet/b202 Ms. Hao-Yu Lu                                        '
,'60 LA321 Macroeconomics 2 L34 https://iitbhilai.webex.com/meet/b204 Dr. Sitakanta Panda                                   '
,'61 LA322 Microeconomics 2 D12 https://iitbhilai.webex.com/meet/b107 Dr. Radeef Chundakkadan                               '
,'62 LA323 Introduction to Popular Culture 2 C12 https://iitbhilai.webex.com/meet/b203 Dr. Sonal Jha                        '
,'63 LA325 Concepts of Personality Psychology 2 L56 https://iitbhilai.webex.com/meet/b204 Dr. Anindita Ghosh                '
,'64 LA332 Chinese Culture 1 D44 https://iitbhilai.webex.com/meet/b303 Ms. Hao-Yu Lu                                        '
,'65 LA335 Economic Growth: Theory and Applications 2 L56 https://iitbhilai.webex.com/meet/b203 Dr. Sitakanta Panda         '
,'66 LA338 Childhood, Adolescence and Youth in Modern Short Fiction 2 D56 https://iitbhilai.webex.com/meet/b203 Dr. Thirthankar Chakraborty '
,'67 LA339 Financial Economics 2 L56 https://iitbhilai.webex.com/meet/b202 Dr. Radeef Chundakkadan                         '
,'68 LA340 Public Finance 2 L12 https://iitbhilai.webex.com/meet/b203 Dr. Sitakanta Panda                                  '
,'69 LA345 Introduction to Classical Theatre 2 G34 https://iitbhilai.webex.com/meet/b202 Dr. Thirthankar Chakraborty       '
,'70 LA346 Microeconomics 2 2 D34 https://iitbhilai.webex.com/meet/b204 Dr. Radeef Chundakkadan                            '
,'71 LA347 Introduction to Organizational Behaviour 2 L34 https://iitbhilai.webex.com/meet/b203 Dr. Anindita Ghosh         '
,'72 LA348 The Individual and Society 2 C34 https://iitbhilai.webex.com/meet/b203 Dr. Sonal Jha                            '
,'73 LA349 Contemporary Indian Cinema: Beyond Bollywood 2 C56 https://iitbhilai.webex.com/meet/b202 Dr. Sonal Jha          '
,'74 LA701 Econometric Methods 6 C16 https://iitbhilai.webex.com/meet/b303 Dr. Sitakanta Panda                             '
,'75 LA702 Advanced Positive Psychology 6 C16 https://iitbhilai.webex.com/meet/b304 Dr. Anindita Ghosh                     '
,'76 LA703 Positive Organizational Behaviour 6 H16 https://iitbhilai.webex.com/meet/b303 Dr. Anindita Ghosh                '
,'77 LA704 Literary Theory 6 L16 https://iitbhilai.webex.com/meet/b103 Dr. Thirthankar Chakraborty                         '
,'78 LA705 Cultural Studies: Theory and Practice 6 L16 https://iitbhilai.webex.com/meet/b104 Dr. Sonal Jha                 '
,'79 LA707 Marcoeconomic Theory 6 F16 https://iitbhilai.webex.com/meet/b203 Dr. Radeef Chundakkadan                        '
,'80 LA798 Independent Study: Development Economics 6 NA NA Dr. Sitakanta Panda                                            '
,'81 LA798 Independent Study: Positive Psychology 6 NA NA Dr. Anindita Ghosh                                               '
,'82 LA798 Independent Study: Literary and Cultural Studies 6 NA NA Dr. Sonal Jha                                          '
,'83 MA509 Statistical Inference 6 D16 https://iitbhilai.webex.com/meet/b103 Dr. Lakshmi Kanta Patra                       '
,'84 MA510 Elementary Number Theory 6 J16 https://iitbhilai.webex.com/meet/b103 Dr. Raj Kumar Mistri                       '
,'85 MA511 Topics In Nonlinear Analysis 6 L16 https://iitbhilai.webex.com/meet/b304 Dr. Pawan Kumar Mishra                 '
,'86 MA512 Topics In Fixed Point Theory 6 K16 https://iitbhilai.webex.com/meet/b204 Dr. Asrifa Sultana                     '
,'87 MA604 Functional Analysis 6 B16 https://iitbhilai.webex.com/meet/b104 Dr. Parameshwary Dayal Srivastava               '
,'88 MA605 Operations Research 4 F14 https://iitbhilai.webex.com/meet/b303 Dr. Kuldeep Kumar Kataria                       '
,'89 MA607 Fourier Analysis 6 I16 https://iitbhilai.webex.com/meet/b302 Dr. Avijit Pal                                     '
,'90 MA609 Numerical Optimization Techniques 2 F56 https://iitbhilai.webex.com/meet/b303 Dr. Lakshmi Kanta Patra           '
,'91 MA699 Project 6 NA NA Dr. Asrifa Sultana                                                                              '
,'92 MA799 Thesis 6 to 24 NA NA Dr. Asrifa Sultana                                                                         '
,'93 ME212 Fluid Mechanics 6 H16 https://iitbhilai.webex.com/meet/b304 Dr. Udayraj                                         '
,'94 ME231 Solid Mechanics-I 6 F16 https://iitbhilai.webex.com/meet/b202 Dr. Anshul Faye                                   '
,'95 ME251 Manufacturing Science I 6 I16 https://iitbhilai.webex.com/meet/b303 Dr. Rahul Jain                              '
,'96 ME333 Theory of Machines and Mechanism 6 A16 https://iitbhilai.webex.com/meet/b204 Dr. Purnendu Das                   '
,'97 ME355 Mechanical Behaviour of Materials 4 I36 https://iitbhilai.webex.com/meet/b202 Dr. Jose Immanuel R               '
,'98 ME413 Refrigeration and Air-Conditioning 4 B14 https://iitbhilai.webex.com/meet/b103 Dr. Balkrishna Mehta             '
,'99 ME499 Thesis 6 to 24 NA NA Dr. Anshul Faye                                                                            '
,'100 ME502 Advanced Engineering Mathematics 6 B16 https://iitbhilai.webex.com/meet/b202 Dr. Vijay Shantaram Duryodhan     '
,'101 ME512 Advanced Fluid Mechanics 6 E16 https://iitbhilai.webex.com/meet/b303 Dr. Udayraj, Dr. Nagesh Devidas Patil     '
,'102 ME513 Convective Heat Transfer 6 C16 https://iitbhilai.webex.com/meet/b302 Dr. Balkrishna Mehta                      '
,'103 ME514 Internal Combustion Engines Fundamental 6 G16 https://iitbhilai.webex.com/meet/b204 Dr. Pravesh Chandra Shukla '
,'104 ME531 Advanced Mechanics of Solids 6 I16 https://iitbhilai.webex.com/meet/b204 Dr. Anshul Faye                   '
,'105 ME551 Advanced Manufacturing Processes 6 D16 https://iitbhilai.webex.com/meet/b104 Dr. Soumya Gangopadhyay       '
,'106 ME557 Laser Material Processing 6 J16 https://iitbhilai.webex.com/meet/b304 Dr. Kaushik Bandyopadhyay            '
,'107 ME599 Thesis 6 to 24 NA NA Dr. Balkrishna Mehta                                                                  '
,'108 ME615 Computational Fluid Dynamics 6 H16 https://iitbhilai.webex.com/meet/b102 Dr. Nagesh Devidas Patil          '
,'109 ME799 Thesis 6 to 24 NA NA Dr. Balkrishna Mehta                                                                  '
,'110 PH511 Atomic and Molecular Physics 6 B16 https://iitbhilai.webex.com/meet/b303 Dr. Mahavir Sharma                '
,'111 PH512 Solid State Physics 6 H16 https://iitbhilai.webex.com/meet/b103 Dr. Sesha Pavan Kumar Vempati              '
,'112 PH513 Experimental and Measurement Techniques 6 D16 https://iitbhilai.webex.com/meet/b304 Dr. Dhruv Pratap Singh '
,'113 PH514 Electronics 6 G16 https://iitbhilai.webex.com/meet/b203 Dr. Dhriti Sundar Ghosh                     '
,'114 PH699 Project 6 NA NA Dr. Sudhanwa Patra                                                                  '
,'115 PH798 Independent Study: Solution Processed Third Generation Photovoltaic 6 NA NA Dr. Dhriti Sundar Ghosh'
,'116 PH798 Independent Study: Compositional Engineering in Perovskite Photovoltaics 6 NA NA Dr. Dhriti Sundar Ghosh'
,'117 PH798 Independent Study: Artificial Micro - Robots: Design and Applications 6 NA NA Dr. Dhruv Pratap Singh'
,'118 PH799 Thesis 6 to 24 NA NA Dr. Sudhanwa Patra'];


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





