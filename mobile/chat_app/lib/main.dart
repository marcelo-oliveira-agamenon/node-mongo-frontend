import 'package:flutter/material.dart';
import "package:chat_app/screens/home_screen.dart";

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          accentColor: Color.fromRGBO(0, 82, 129, 1),
          primaryColor: Color.fromRGBO(219, 235, 243, 1)),
      home: HomeScreen(),
    );
  }
}
