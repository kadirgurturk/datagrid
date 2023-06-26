import { useEffect } from "react";

let DataList = [
    {
      link: "www.facebook.com",
      socialMedia: "Facebook",
      description: "İnsanların başka insanlarla iletişim kurmasını ve bilgi alışverişi yapmasını amaçlayan bir sosyal ağ"
    },
    {
      link: "www.twitter.com",
      socialMedia: "Twitter",
      description: "Kısa mesajlarla haberleşme sağlayan bir sosyal ağ ve mikroblogging platformu"
    },
    {
      link: "www.instagram.com",
      socialMedia: "Instagram",
      description: "Fotoğraf ve video paylaşımı üzerine odaklanmış bir sosyal medya platformu"
    },
    {
      link: "www.linkedin.com",
      socialMedia: "LinkedIn",
      description: "Profesyonel iş ağı ve iş bulma platformu"
    },
    {
      link: "www.youtube.com",
      socialMedia: "YouTube",
      description: "Video paylaşım platformu ve çevrimiçi video izleme sitesi"
    },
    {
      link: "www.pinterest.com",
      socialMedia: "Pinterest",
      description: "Görsel keşfetme ve paylaşma platformu"
    },
    {
      link: "www.snapchat.com",
      socialMedia: "Snapchat",
      description: "Geçici görsel ve metin tabanlı iletişim sağlayan bir sosyal medya uygulaması"
    },
    {
      link: "www.tiktok.com",
      socialMedia: "TikTok",
      description: "Kısa video paylaşım platformu"
    },
    {
      link: "www.reddit.com",
      socialMedia: "Reddit",
      description: "Kullanıcıların içerik paylaşımı ve tartışma yaptığı bir sosyal medya platformu"
    },
    {
      link: "www.whatsapp.com",
      socialMedia: "WhatsApp",
      description: "Anlık mesajlaşma ve sesli görüşme sağlayan bir mesajlaşma uygulaması"
    },
    {
      link: "www.twitch.tv",
      socialMedia: "Twitch",
      description: "Canlı yayın platformu ve oyun topluluk sitesi"
    },
    {
      link: "www.tumblr.com",
      socialMedia: "Tumblr",
      description: "Blog paylaşım platformu ve sosyal medya ağı"
    },
    {
      link: "www.spotify.com",
      socialMedia: "Spotify",
      description: "Dijital müzik platformu ve müzik akış hizmeti"
    },
    {
      link: "www.deviantart.com",
      socialMedia: "DeviantArt",
      description: "Sanatçıların eserlerini sergilediği bir topluluk sanat platformu"
    },
    {
      link: "www.weibo.com",
      socialMedia: "Weibo",
      description: "Çin'in mikroblogging ve sosyal medya platformu"
    },
    {
      link: "www.vimeo.com",
      socialMedia: "Vimeo",
      description: "Profesyonel video paylaşım platformu"
    },
    {
      link: "www.quora.com",
      socialMedia: "Quora",
      description: "Soru-cevap ve bilgi paylaşım platformu"
    },
    {
      link: "www.behance.net",
      socialMedia: "Behance",
      description: "Yaratıcı profesyonellerin işlerini sergilediği bir sanat ve tasarım platformu"
    },
    {
      link: "www.medium.com",
      socialMedia: "Medium",
      description: "Yazarların yazılarını paylaştığı bir içerik paylaşım platformu"
    },
    {
      link: "www.flickr.com",
      socialMedia: "Flickr",
      description: "Fotoğraf paylaşım platformu ve çevrimiçi fotoğraf topluluğu"
    },
    {
      link: "www.soundcloud.com",
      socialMedia: "SoundCloud",
      description: "Müzik ve ses içeriği paylaşım platformu"
    },
    {
      link: "www.xing.com",
      socialMedia: "Xing",
      description: "İş dünyasında ağ oluşturmayı sağlayan bir sosyal ağ"
    },
    {
      link: "www.slack.com",
      socialMedia: "Slack",
      description: "Ekip iletişimi ve işbirliği platformu"
    },
    {
      link: "www.periscope.tv",
      socialMedia: "Periscope",
      description: "Canlı video yayın platformu"
    },
    {
      link: "www.dribbble.com",
      socialMedia: "Dribbble",
      description: "Tasarımcıların işlerini sergilediği bir topluluk platformu"
    },
    {
      link: "www.telegram.org",
      socialMedia: "Telegram",
      description: "Güvenli mesajlaşma ve dosya paylaşımı sağlayan bir anlık mesajlaşma uygulaması"
    },
    {
      link: "www.behance.net",
      socialMedia: "Behance",
      description: "Yaratıcı profesyonellerin işlerini sergilediği bir sanat ve tasarım platformu"
    },
    {
      link: "www.producthunt.com",
      socialMedia: "Product Hunt",
      description: "Yeni ürünleri ve teknolojileri keşfetme platformu"
    },
    {
      link: "www.steamcommunity.com",
      socialMedia: "Steam Community",
      description: "Oyun severlerin buluştuğu bir oyun topluluk platformu"
    },
    {
      link: "www.yelp.com",
      socialMedia: "Yelp",
      description: "Restoranlar ve diğer işletmeler hakkında inceleme ve değerlendirmelerin bulunduğu bir platform"
    },
    {
      link: "www.trello.com",
      socialMedia: "Trello",
      description: "Proje yönetimi ve işbirliği platformu"
    },
    {
      link: "www.scribd.com",
      socialMedia: "Scribd",
      description: "Elektronik kitap ve belge paylaşım platformu"
    },
    {
      link: "www.vk.com",
      socialMedia: "VK",
      description: "Rusya merkezli sosyal ağ ve mesajlaşma platformu"
    },
    {
      link: "www.etsy.com",
      socialMedia: "Etsy",
      description: "El yapımı ve vintage ürünlerin satıldığı bir e-ticaret platformu"
    },
    {
      link: "www.meetup.com",
      socialMedia: "Meetup",
      description: "Ortak ilgi alanlarına sahip insanların buluştuğu etkinlik ve toplantı organizasyon platformu"
    },
    {
      link: "www.last.fm",
      socialMedia: "Last.fm",
      description: "Müzik keşfetme ve müzik beğeni paylaşım platformu"
    }
  ];
  
  
  if(localStorage.getItem("dataList") === null){
    localStorage.setItem('dataList', JSON.stringify(DataList))
  }

  

export default DataList;