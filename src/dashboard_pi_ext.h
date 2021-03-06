/******************************************************************************
 * $Id: dashboard_pi_ext.h, v1.0 2010/08/05 SethDart Exp $
 *
 * Project:  OpenCPN
 * Purpose:  Dashboard Plugin
 * Author:   Jean-Eudes Onfray
 *
 ***************************************************************************
 *   Copyright (C) 2010 by David S. Register                               *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   51 Franklin Street, Fifth Floor, Boston, MA 02110-1301,  USA.         *
 ***************************************************************************
 */

#ifndef _DASHBOARDPIEXT_H_
#define _DASHBOARDPIEXT_H_

#include <wx/font.h>

extern wxFont *g_pFontTitle;
extern wxFont *g_pFontData;
extern wxFont *g_pFontLabel;
extern wxFont *g_pFontSmall;
extern int g_iDashSpeedMax;
extern int g_iDashCOGDamp;
extern int g_iDashSpeedUnit;
extern int g_iDashSOGDamp;
extern int g_iDashDepthUnit;
extern int g_iDashDistanceUnit;
extern int g_iDashWindSpeedUnit;
extern int g_iDashTemperatureUnit;
extern int g_iUTCOffset;
extern double g_dDashDBTOffset;
extern wxString g_sDialColorBackground;
extern wxString g_sDialColorForeground;
extern wxString g_sDialColorLabel;
extern wxString g_sDialColorRed;
extern wxString g_sDialColorGreen;
extern wxString g_sDialColorIs1;
extern wxString g_sDialColorIs2;
extern wxString g_sDialNeedleColor;
extern wxString g_sDialSecondNeedleColor;
extern wxString g_sDialCentralCircleColor;
extern wxString g_sDialColorCompassBackgound;
extern bool g_bDialNeedleEmbossed;
extern wxString g_sDialNeedleContourColor;
extern bool g_bDialShowRedGreen;
extern int g_iDialLowDegRedGreen;
extern int g_iDialHighDegRedGreen;

#endif // _DASHBOARDPIEXT_H_
