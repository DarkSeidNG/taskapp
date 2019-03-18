<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="description" content="Easy to use task app for sharing interview question tasks.">
    <meta name="keywords" content="tasks, tests, reactjs, quiz">
    <meta name="author" content="Ifeanyi Orji">

    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">

    <title>Task App</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app"></div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
