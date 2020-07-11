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
            height: 280,
          ),
          Divider(
            color: Color.fromRGBO(55, 79, 164, 1),
            thickness: 50,
          ),
          SizedBox(
            height: 25,
          ),
          Container(
            decoration: BoxDecoration(boxShadow: [
              BoxShadow(
                spreadRadius: 3,
                blurRadius: 10,
                color: Colors.black.withOpacity(0.09),
              ),
            ]),
            child: Padding(
              padding: const EdgeInsets.only(
                left: 18,
                right: 18,
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
                          Row(
                            children: <Widget>[
                              Text(
                                "USUÁRIO",
                                style: TextStyle(
                                  fontSize: 15,
                                  letterSpacing: 1,
                                  fontFamily: "Open Sans",
                                ),
                              ),
                            ],
                          ),
                          TextField(
                            decoration: InputDecoration(
                              contentPadding: EdgeInsets.only(
                                top: 0,
                                bottom: 0,
                              ),
                            ),
                          ),
                        ],
                      ),
                      SizedBox(
                        height: 25,
                      ),
                      Column(
                        children: <Widget>[
                          Row(
                            children: <Widget>[
                              Text(
                                "SENHA",
                                style: TextStyle(
                                  fontSize: 15,
                                  letterSpacing: 1,
                                  fontFamily: "Open Sans",
                                ),
                              ),
                            ],
                          ),
                          TextField(
                            decoration: new InputDecoration(
                              enabledBorder: OutlineInputBorder(
                                borderSide: BorderSide(
                                  color: Color.fromRGBO(0, 82, 129, 1),
                                  width: 0.9,
                                ),
                                borderRadius: BorderRadius.all(
                                  Radius.circular(55),
                                ),
                              ),
                              focusedBorder: OutlineInputBorder(
                                borderSide: BorderSide(
                                  color: Color.fromRGBO(0, 82, 129, 1),
                                  width: 0.9,
                                ),
                                borderRadius: BorderRadius.all(
                                  Radius.circular(55),
                                ),
                              ),
                            ),
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
                          ),
                          FlatButton(
                            onPressed: () {},
                            child: Text(
                              "CRIAR CONTA",
                              style: TextStyle(color: Colors.white),
                            ),
                            color: Color.fromRGBO(146, 191, 118, 1),
                          )
                        ],
                      )
                    ],
                  ),
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
