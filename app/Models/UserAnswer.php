<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserAnswer extends Model
{
    public function question(){
        return $this->belongsTo('App\Models\TaskQuestion');
    }

    public function selectedOption(){
        return $this->hasOne('App\Models\QuestionOption', 'selected_question_option_id', 'id');
    }
}
