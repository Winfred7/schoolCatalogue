//create parent class
class School{
  constructor(name,level,numberOfStudents){
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;
  };

  get name(){
   return this._name;

  };

  get level(){
    return this._level;
  };

  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(num){
    typeof num==='number' ? this._numberOfStudents=num : console.log('Invalid input: '+ num+ ' must be set to a Number');
  };

  quickFacts(){
    console.log('SCHOOL ' +this._name +' educates '+this._numberOfStudents + ' students at the '+this._level +' school level.');
  };

 static pickSubstituteTeacher(substituteTeachers){
  let ran=Math.floor(Math.random() * substituteTeachers.length -1);
  return substituteTeachers[ran] ;
  }
};

class PrimarySchool extends School{
  constructor(name,numberOfStudents,pickPolicy){
     super(name,'primary',numberOfStudents);
     this._pickPolicy=pickPolicy;
  };

  get pickPolicy(){
    return this._pickPolicy;
  };
};
//middle school class
class MiddleSchool extends School{
  constructor(name,numberOfStudents){
    super(name,'middle',numberOfStudents);
  };
};
//high school class
class HighSchool extends School{
  constructor(name,numberOfStudents,sportsTeams){
    super(name,'high',numberOfStudents);
    this._sportsTeams=sportsTeams;
  };

  get sportsTeams(){
    return console.log(this._sportsTeams);
  }
}

const lorraineHansbury=new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.numberOfStudents=769;
lorraineHansbury.quickFacts();
//console.log(lorraineHansbury.pickPolicy)

School.pickSubstituteTeacher(['Jamal Crawford','Lou Williams','J. R. Smith','James Harden','Jason Terry','Manu Ginobli']);

const alSmith=new HighSchool('Al E. Smith',415,['Baseball','Basketball','Volleyball','Track and Field']);

alSmith.sportsTeams;



