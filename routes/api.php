<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1', 'middleware' => 'api'], function() {
    Route::get('/questions', 'API\v1\QuestionController@index');
    Route::post('/questions/answer', 'API\v1\QuestionController@answer');

    Route::post('/tasks/new', 'API\v1\TaskController@store');
    Route::get('/tasks/{task}', 'API\v1\TaskController@show');
    Route::post('/tasks/question/answer', 'API\v1\UserAnswerController@store');
});
