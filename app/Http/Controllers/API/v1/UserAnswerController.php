<?php

namespace App\Http\Controllers\API\v1;

use App\Models\UserAnswer;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;

class UserAnswerController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'task_question_id' => 'required',
            'answer_type' => 'required|string',
            'answer' => 'required',
        ]);

        if ($validator->fails()) {
            $response['status'] =  'error';
            $response['message'] =  implode(',',$validator->errors()->all());
            return response()->json($response);
        }
        else{
            $answer = new UserAnswer();
            $answer->task_question_id = $request->task_question_id;
            $answer->answer_type = $request->answer_type;

            if ($request->answer_type === "multi-option"){
                $answer->selected_question_option_id = $request->answer;
            }
            else if ($request->answer_type === "free-text"){
                $answer->text_answer = $request->answer;
            }

            $answer->save();

            $response['status'] =  'success';
            $response['message'] =  'Question answered successfully';
            return response()->json($response);
        }
    }

}
