<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_answers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger("task_question_id")->unique();
            $table->unsignedBigInteger("selected_question_option_id")->nullable();
            $table->text("text_answer")->nullable();
            $table->string("answer_type");
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('task_question_id')->references('id')->on('task_questions')->onDelete('cascade')->onUpdate('no action');
            $table->foreign('selected_question_option_id')->references('id')->on('question_options')->onDelete('cascade')->onUpdate('no action');
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_answers');
    }
}
