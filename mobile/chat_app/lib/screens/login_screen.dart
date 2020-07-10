import 'package:flutter/material.dart';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: <Widget>[
          Image(
            image: AssetImage("assets/image/ChatME.png"),
            height: 320,
          ),
          Padding(
            padding: const EdgeInsets.only(
              left: 10,
              right: 10,
            ),
            child: Card(
              color: Colors.white,
              child: Padding(
                padding: const EdgeInsets.only(
                  top: 8,
                  bottom: 8,
                  right: 28,
                  left: 28,
                ),
                child: Column(
                  children: <Widget>[
                    Column(
                      children: <Widget>[
                        Text(
                          "USUÁRIO",
                          style: TextStyle(fontSize: 15, letterSpacing: 1),
                        ),
                        TextField(
                          enabled: true,
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 25,
                    ),
                    Column(
                      children: <Widget>[
                        Text(
                          "SENHA",
                          style: TextStyle(fontSize: 15, letterSpacing: 1),
                        ),
                        TextField(
                          enabled: true,
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    Column(
                      children: <Widget>[
                        FlatButton(
                          onPressed: () {},
                          child: Text(
                            "ENTRAR",
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 15,
                              letterSpacing: 1,
                            ),
                          ),
                          color: Color.fromRGBO(0, 82, 129, 1),
                        )
                      ],
                    )
                  ],
                ),
              ),
            ),
          )
        ],
      ),
      backgroundColor: Theme.of(context).primaryColor,
    );
  }
}
