import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  const tracks = [
    {
      id: 1,
      title: "Cosmic Journey",
      duration: "3:42",
      genre: "Electronic",
    },
    {
      id: 2,
      title: "Neon Dreams",
      duration: "4:15",
      genre: "Synthwave",
    },
    {
      id: 3,
      title: "Digital Pulse",
      duration: "3:28",
      genre: "EDM",
    },
    {
      id: 4,
      title: "Urban Vibes",
      duration: "3:56",
      genre: "Hip-Hop",
    },
  ];

  const playTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="font-heading font-bold text-xl gradient-text">
                MUSIC STUDIO
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-red-400 transition-colors font-medium"
                >
                  Главная
                </a>
                <a
                  href="#music"
                  className="text-white hover:text-blue-400 transition-colors font-medium"
                >
                  Музыка
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-orange-400 transition-colors font-medium"
                >
                  Обо мне
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-red-400 transition-colors font-medium"
                >
                  Контакты
                </a>
              </div>
            </div>
            <Button className="md:hidden" variant="ghost" size="sm">
              <Icon name="Menu" size={20} className="text-white" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading font-black text-5xl md:text-7xl mb-6 leading-tight">
                <span className="gradient-text">СОЗДАЮ</span>
                <br />
                <span className="text-white">МУЗЫКУ</span>
                <br />
                <span className="gradient-text">БУДУЩЕГО</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Современные треки, которые заставят вас двигаться. Слушайте
                прямо сейчас и погрузитесь в мир электронных ритмов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Слушать сейчас
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать треки
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/img/63689889-b1a4-4a09-838f-bb9871c839dd.jpg"
                  alt="Артист"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute inset-0 gradient-bg rounded-2xl blur-xl opacity-30 scale-105"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              <span className="gradient-text">МОЯ МУЗЫКА</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Коллекция современных треков в различных жанрах
            </p>
          </div>

          {/* Music Player */}
          <Card className="mb-12 bg-black/50 border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">
                    {tracks[currentTrack].title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {tracks[currentTrack].genre}
                  </CardDescription>
                </div>
                <Badge className="bg-red-500">
                  {tracks[currentTrack].duration}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              {/* Fake Audio Visualizer */}
              <div className="mb-6">
                <div className="flex items-center justify-center h-20 bg-gray-900 rounded-lg mb-4">
                  <div className="flex items-end space-x-1">
                    {Array.from({ length: 40 }, (_, i) => (
                      <div
                        key={i}
                        className={`w-1 music-wave rounded-full transition-all duration-300 ${
                          isPlaying ? "animate-pulse" : ""
                        }`}
                        style={{
                          height: `${Math.random() * 60 + 10}px`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Progress Bar */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: "35%" }}
                  ></div>
                </div>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-center space-x-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-red-400"
                >
                  <Icon name="SkipBack" size={20} />
                </Button>
                <Button
                  onClick={togglePlay}
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 rounded-full w-16 h-16"
                >
                  <Icon name={isPlaying ? "Pause" : "Play"} size={24} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-blue-400"
                >
                  <Icon name="SkipForward" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Track List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tracks.map((track, index) => (
              <Card
                key={track.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  currentTrack === index
                    ? "bg-red-500/20 border-red-500"
                    : "bg-black/50 border-gray-800 hover:border-gray-600"
                }`}
                onClick={() => playTrack(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-red-400"
                      >
                        <Icon name="Play" size={16} />
                      </Button>
                      <div>
                        <h3 className="font-semibold text-white">
                          {track.title}
                        </h3>
                        <p className="text-sm text-gray-400">{track.genre}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400 text-sm">
                        {track.duration}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                <span className="gradient-text">ОБО МНЕ</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Я создаю музыку уже более 5 лет, экспериментируя с различными
                жанрами и стилями. Мои треки сочетают в себе современные
                электронные звуки с классическими мелодиями.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Вдохновляюсь urban-культурой, технологиями и космосом. Каждый
                трек - это путешествие в новый мир звуков.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-red-500">Electronic</Badge>
                <Badge className="bg-blue-500">Synthwave</Badge>
                <Badge className="bg-orange-500">EDM</Badge>
                <Badge className="bg-purple-500">Hip-Hop</Badge>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <Icon name="Music" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">20+ Треков</h3>
                      <p className="text-gray-400">Выпущено за последний год</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Icon name="Users" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        10K+ Слушателей
                      </h3>
                      <p className="text-gray-400">Ежемесячно на платформах</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">5 Наград</h3>
                      <p className="text-gray-400">
                        За лучшие электронные треки
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              <span className="gradient-text">СВЯЗАТЬСЯ</span>
            </h2>
            <p className="text-xl text-gray-300">
              Хотите сотрудничать? Напишите мне!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-400">music@example.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-black/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Телефон</h3>
                      <p className="text-gray-400">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex space-x-4">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 flex-1"
                >
                  <Icon name="Youtube" size={20} className="mr-2" />
                  YouTube
                </Button>
                <Button
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 flex-1"
                >
                  <Icon name="Instagram" size={20} className="mr-2" />
                  Instagram
                </Button>
              </div>
            </div>

            <Card className="bg-black/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">
                  Отправить сообщение
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    className="bg-black/50 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="bg-black/50 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваше сообщение"
                    rows={4}
                    className="bg-black/50 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Music Studio. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
