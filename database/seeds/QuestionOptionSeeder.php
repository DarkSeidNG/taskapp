<?php

use Illuminate\Database\Seeder;

class QuestionOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * Options for the first question
         */
        \App\Models\QuestionOption::insert([
            'id' => 200,
            'question_id' => 100,
            'question_option' => 'Method'
        ]);

        \App\Models\QuestionOption::insert([
            'id' => 201,
            'question_id' => 100,
            'question_option' => 'Classes'
        ]);

        \App\Models\QuestionOption::insert([
            'id' => 203,
            'question_id' => 100,
            'question_option' => 'Interfaces'
        ]);

        \App\Models\QuestionOption::insert([
            'id' => 204,
            'question_id' => 100,
            'question_option' => 'Classes and Interfaces'
        ]);
        ////////END


        /**
         * Options for the second question
         */
        \App\Models\QuestionOption::insert([
            'id' => 205,
            'question_id' => 101,
            'question_option' => 'from'
        ]);

        \App\Models\QuestionOption::insert([
            'id' => 206,
            'question_id' => 101,
            'question_option' => 'to'
        ]);

        \App\Models\QuestionOption::insert([
            'id' => 207,
            'question_id' => 101,
            'question_option' => 'this'
        ]);

        \App\Models\QuestionOption::insert([
            'id' => 208,
            'question_id' => 101,
            'question_option' => 'object'
        ]);
        ////////END


        /**
         * Options for the third question
         */
        \App\Models\QuestionOption::insert([
            'id' => 209,
            'question_id' => 102,
            'question_option' => 'There is no difference'
        ]);

        \App\Models\QuestionOption::insert([
            'id' => 210,
            'question_id' => 102,
            'question_option' => 'Functions are considered as fields'
        ]);

        \App\Models\QuestionOption::insert([
            'id' => 211,
            'question_id' => 102,
            'question_option' => 'Variables are specific'
        ]);

        \App\Models\QuestionOption::insert([
            'id' => 212,
            'question_id' => 102,
            'question_option' => 'Functions are values, and there is no hard distinction between methods and fields'
        ]);
        ////////END
    }
}
