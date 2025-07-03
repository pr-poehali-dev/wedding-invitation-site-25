import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const WeddingRSVP = () => {
  const [attendance, setAttendance] = useState("");
  const [menuChoice, setMenuChoice] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Здесь будет логика отправки формы
  };

  if (submitted) {
    return (
      <section
        id="rsvp"
        className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <Icon
              name="CheckCircle"
              className="w-16 h-16 text-green-500 mx-auto mb-6"
            />
            <h2 className="text-3xl font-light text-gray-800 mb-4">Спасибо!</h2>
            <p className="text-lg text-gray-600">
              Ваш ответ получен. Мы с нетерпением ждем встречи с вами!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <Icon
            name="Mail"
            className="w-12 h-12 text-purple-400 mx-auto mb-6"
          />
          <h2 className="text-4xl font-light text-gray-800 mb-4">
            Подтверждение участия
          </h2>
          <p className="text-lg text-gray-600">
            Пожалуйста, заполните форму до 1 августа 2024
          </p>
        </div>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-pink-100">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-gray-800">
              RSVP
            </CardTitle>
            <CardDescription className="text-center">
              Ваше участие очень важно для нас
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">Имя *</Label>
                  <Input id="firstName" placeholder="Ваше имя" required />
                </div>
                <div>
                  <Label htmlFor="lastName">Фамилия *</Label>
                  <Input id="lastName" placeholder="Ваша фамилия" required />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон</Label>
                <Input id="phone" placeholder="+7 (999) 123-45-67" />
              </div>

              <div>
                <Label className="text-base mb-3 block">
                  Сможете ли вы присутствовать? *
                </Label>
                <RadioGroup value={attendance} onValueChange={setAttendance}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes">Да, с удовольствием!</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">К сожалению, не смогу</Label>
                  </div>
                </RadioGroup>
              </div>

              {attendance === "yes" && (
                <>
                  <div>
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите количество" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 человек</SelectItem>
                        <SelectItem value="2">2 человека</SelectItem>
                        <SelectItem value="3">3 человека</SelectItem>
                        <SelectItem value="4">4 человека</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base mb-3 block">Выбор меню *</Label>
                    <RadioGroup
                      value={menuChoice}
                      onValueChange={setMenuChoice}
                    >
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                          <RadioGroupItem
                            value="meat"
                            id="meat"
                            className="mt-1"
                          />
                          <div>
                            <Label htmlFor="meat" className="font-medium">
                              Мясное меню
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Говядина в винном соусе, картофель с травами,
                              сезонные овощи
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                          <RadioGroupItem
                            value="fish"
                            id="fish"
                            className="mt-1"
                          />
                          <div>
                            <Label htmlFor="fish" className="font-medium">
                              Рыбное меню
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Лосось на гриле, рис с овощами, зеленый салат
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 border rounded-lg hover:bg-purple-50 transition-colors">
                          <RadioGroupItem
                            value="vegetarian"
                            id="vegetarian"
                            className="mt-1"
                          />
                          <div>
                            <Label htmlFor="vegetarian" className="font-medium">
                              Вегетарианское меню
                            </Label>
                            <p className="text-sm text-gray-600 mt-1">
                              Киноа с овощами, авокадо, орехи и семена
                            </p>
                          </div>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </>
              )}

              <div>
                <Label htmlFor="dietary">Особые пожелания к питанию</Label>
                <Textarea
                  id="dietary"
                  placeholder="Аллергии, диетические ограничения или другие пожелания"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="message">Сообщение для молодоженов</Label>
                <Textarea
                  id="message"
                  placeholder="Ваши пожелания и поздравления"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Отправить ответ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WeddingRSVP;
