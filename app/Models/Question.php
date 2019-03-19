<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public function questionOptions(){
        return $this->hasMany('App\Models\QuestionOption');
    }

    public function questionRealAnswer(){
        return $this->hasOne('App\Models\RealAnswer');
    }

    public function taskQuestions(){
        return $this->hasMany('App\Models\TaskQuestion');
    }
}
