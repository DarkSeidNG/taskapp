<?php

namespace App\Http\Controllers\API\v1;

use App\Http\Resources\TaskResource;
use App\Mail\TaskCreated;
use App\Models\Task;
use App\Models\TaskQuestion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Validator;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'user_email' => 'required|string',
            'user_name' => 'required|string',
            'task_title' => 'required|string',
            'questions' => 'required',
        ]);

        if ($validator->fails()) {
            $response['status'] =  'error';
            $response['message'] =  implode(',',$validator->errors()->all());
            return response()->json($response);
        }
        else{
            $task = new Task();
            $task->user_email = $request->user_email;
            $task->user_name = $request->user_name;
            $task->task_title = $request->task_title;
            $task->task_key = str_random(20);
            $task->save();

            foreach ($request->questions as $question){
                $taskQuestion = new TaskQuestion();
                $taskQuestion->task_id = $task->id;
                $taskQuestion->question_id = $question;
                $taskQuestion->save();
            }

            $this->sendTaskMail($task);

            $response['status'] =  'success';
            $response['message'] =  'Task created successfully';
            return response()->json($response);

        }
    }

    public function sendTaskMail($task){
        Mail::to($task->user_email)->queue(new TaskCreated($task));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($task_key)
    {
        $task = Task::where("task_key", $task_key)->first();

        return response()->json(TaskResource::make($task));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
