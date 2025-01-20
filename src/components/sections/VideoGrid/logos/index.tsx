import React from 'react';
import { Bot, Globe2, Share2, Mail, Phone, Calendar } from 'lucide-react';

export const Logos = {
  SupportBot: () => (
    <Bot className="w-12 h-12" />
  ),
  WebBuilder: () => (
    <Globe2 className="w-12 h-12" />
  ),
  SocialManager: () => (
    <Share2 className="w-12 h-12" />
  ),
  OutreachBot: () => (
    <Mail className="w-12 h-12" />
  ),
  VoiceAssistant: () => (
    <Phone className="w-12 h-12" />
  ),
  BookingAssistant: () => (
    <Calendar className="w-12 h-12" />
  ),
};