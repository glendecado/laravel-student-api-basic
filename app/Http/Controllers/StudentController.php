<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Student::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'fname' => 'required',
            'lname' => 'required',
            'section' => 'required',
            'email' => 'required',

        ]);
        return Student::create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Student::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $Student = Student::find($id);
        $Student->update($request->all());
        return $Student;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        return Student::destroy($id);
    }

    public function search($name)
    {
        return Student::where('fname', 'like', '%' . $name . '%')
            ->orWhere('lname', 'like', '%' . $name . '%')
            ->get();
    }
}
